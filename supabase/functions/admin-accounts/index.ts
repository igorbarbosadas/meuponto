import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.49.4";

// Meu Ponto 1.11.5: painel ADMIN de leitura, autorizado por UID no servidor.
const ORIGIN = "https://igorbarbosadas.github.io";
const cors = {
  "Access-Control-Allow-Origin": ORIGIN,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "Vary": "Origin",
};
const respond = (status: number, data: unknown) => new Response(JSON.stringify(data), { status, headers: cors });
const obj = (value: unknown): Record<string, unknown> => value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
const text = (value: unknown) => typeof value === "string" ? value : null;
const number = (value: unknown) => typeof value === "number" && Number.isFinite(value) ? value : null;
const uid = (value: unknown) => typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
const filteredSettings = (settings: Record<string, unknown>) => {
  const names = ["salary", "divisor", "extraPct", "nightPct", "holidayPct", "nightReduced", "nightEnd", "holidayMode", "breakTracking", "breakMinutes", "mode", "scheduleUiType", "startAt", "endAt", "weekdays", "uf", "city", "shiftCycle", "coverages"];
  return Object.fromEntries(names.map(name => [name, settings[name] ?? null]));
};
serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") return respond(405, { error: "Método não permitido" });
  if (req.headers.get("origin") !== ORIGIN) return respond(403, { error: "Origem não autorizada" });
  const header = req.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return respond(401, { error: "Faça login novamente" });
  const url = Deno.env.get("SUPABASE_URL");
  const anon = Deno.env.get("SUPABASE_ANON_KEY");
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const admins = (Deno.env.get("ADMIN_USER_IDS") || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
  if (!url || !anon || !secret || !admins.length) return respond(503, { error: "Painel administrativo não configurado" });
  try {
    const session = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: identity, error: authError } = await session.auth.getUser(token);
    if (authError || !identity.user) return respond(401, { error: "Sessão inválida" });
    if (!admins.includes(identity.user.id.toLowerCase())) return respond(403, { error: "Acesso administrativo negado" });
    const admin = createClient(url, secret, { auth: { persistSession: false, autoRefreshToken: false } });
    const body = obj(await req.json().catch(() => ({})));
    const action = body.action === "detail" || body.action === "export" ? body.action : "list";

    if (action === "list") {
      const page = Number.isInteger(body.page) && Number(body.page) >= 1 && Number(body.page) <= 10000 ? Number(body.page) : 1;
      const perPage = 100;
      const { data: users, error: usersError } = await admin.auth.admin.listUsers({ page, perPage });
      if (usersError) throw usersError;
      const currentUsers = users?.users || [];
      const ids = currentUsers.map(u => u.id);
      const { data: states, error: statesError } = ids.length ? await admin.from("ponto_state").select("user_id,data,revision,updated_at").in("user_id", ids) : { data: [], error: null };
      if (statesError) throw statesError;
      const byId = new Map((states || []).map(s => [s.user_id, s]));
      const accounts = currentUsers.map(u => {
        const state = byId.get(u.id);
        const data = obj(state?.data);
        const settings = obj(data.settings);
        return {
          id: u.id,
          email: u.email || "E-mail indisponível",
          created_at: u.created_at,
          email_confirmed_at: u.email_confirmed_at || null,
          last_sign_in_at: u.last_sign_in_at || null,
          has_state: !!state,
          punches: Array.isArray(data.records) ? data.records.length : 0,
          revision: state?.revision ?? null,
          updated_at: state?.updated_at ?? null,
          settings: {
            uf: text(settings.uf), city: text(settings.city),
            scheduleUiType: text(settings.scheduleUiType),
            startAt: text(settings.startAt), endAt: text(settings.endAt),
            configured: (number(settings.salary) ?? 0) > 0,
          },
        };
      });
      return respond(200, { accounts, page, hasNext: currentUsers.length === perPage });
    }
    if (!uid(body.user_id)) return respond(400, { error: "Identificador de conta inválido" });
    const userId = String(body.user_id);
    // Verifique a existência da conta no Auth antes de consultar o registro.
    const { data: found, error: userError } = await admin.auth.admin.getUserById(userId);
    if (userError || !found?.user) return respond(404, { error: "Conta não encontrada" });
    const { data: state, error: stateError } = await admin.from("ponto_state").select("data,revision,updated_at").eq("user_id", userId).maybeSingle();
    if (stateError) throw stateError;
    const data = obj(state?.data);
    if (action === "export") {
      return respond(200, {
        account: { id: found.user.id, email: found.user.email || null, created_at: found.user.created_at },
        snapshot: { user_id: userId, data: state?.data ?? null, revision: state?.revision ?? null, updated_at: state?.updated_at ?? null },
        exported_at: new Date().toISOString(),
        read_only: true,
      });
    }
    const records = Array.isArray(data.records) ? data.records : [];
    const holidays = obj(data.holidays);
    const exceptions = obj(data.exceptions);
    // Entrega o histórico de batidas da conta selecionada. Nenhum outro usuário é incluído.
    return respond(200, {
      account: {
        id: found.user.id, email: found.user.email || "E-mail indisponível",
        created_at: found.user.created_at, email_confirmed_at: found.user.email_confirmed_at || null,
        last_sign_in_at: found.user.last_sign_in_at || null,
      },
      state: { revision: state?.revision ?? null, updated_at: state?.updated_at ?? null, has_state: !!state },
      settings: filteredSettings(obj(data.settings)),
      records: records.map((r: unknown) => { const item = obj(r); return { at: text(item.at), kind: text(item.kind), id: text(item.id) }; }),
      holidays: Object.entries(holidays).map(([day, name]) => ({ day, name: typeof name === "string" ? name : JSON.stringify(name) })),
      exceptions: Object.entries(exceptions).map(([day, value]) => ({ day, value })),
    });
  } catch (error) {
    console.error("Consulta administrativa falhou", error);
    return respond(500, { error: "Não foi possível consultar os dados. Verifique os logs da função." });
  }
});
