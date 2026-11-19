import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.49.4";

// Consultas apenas. Não oferece operações de exclusão ou alteração de dados.
const origin = "https://igorbarbosadas.github.io";
const cors = {
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "Vary": "Origin",
};
const respond = (status: number, payload: unknown) =>
  new Response(JSON.stringify(payload), { status, headers: cors });

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") return respond(405, { error: "Método não permitido" });
  if (req.headers.get("origin") !== origin) return respond(403, { error: "Origem não autorizada" });
  const token = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!token || token === req.headers.get("authorization")) return respond(401, { error: "Faça login novamente" });
  const url = Deno.env.get("SUPABASE_URL");
  const publicKey = Deno.env.get("SUPABASE_ANON_KEY");
  const secretKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  // Na seção Edge Functions > Secrets, configure ADMIN_USER_IDS com o UUID do administrador.
  const allowed = (Deno.env.get("ADMIN_USER_IDS") || "").split(",").map(x => x.trim().toLowerCase()).filter(Boolean);
  if (!url || !publicKey || !secretKey || !allowed.length) return respond(503, { error: "Painel administrativo não configurado" });
  try {
    const scoped = createClient(url, publicKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: auth, error: authError } = await scoped.auth.getUser(token);
    if (authError || !auth.user) return respond(401, { error: "Sessão inválida" });
    if (!allowed.includes(auth.user.id.toLowerCase())) return respond(403, { error: "Você não tem acesso ao painel administrativo" });

    const admin = createClient(url, secretKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const payload = await req.json().catch(() => ({}));
    const page = Number.isInteger(payload.page) && payload.page >= 1 && payload.page <= 10000 ? payload.page : 1;
    const perPage = 100;
    const { data: users, error: usersError } = await admin.auth.admin.listUsers({ page, perPage });
    if (usersError) throw usersError;
    const ids = (users?.users || []).map(u => u.id);
    let states: Array<{user_id:string, data:unknown, revision:number, updated_at:string}> = [];
    if (ids.length) {
      const result = await admin.from("ponto_state").select("user_id,data,revision,updated_at").in("user_id", ids);
      if (result.error) throw result.error;
      states = result.data || [];
    }
    const map = new Map(states.map(state => [state.user_id, state]));
    const accounts = (users?.users || []).map(user => {
      const state = map.get(user.id);
      const raw = state?.data;
      const data = raw && typeof raw === "object" ? raw as Record<string,unknown> : {};
      const records = Array.isArray(data.records) ? data.records : [];
      const settings = data.settings && typeof data.settings === "object" ? data.settings as Record<string,unknown> : {};
      const publicSettings = {
        uf: typeof settings.uf === "string" ? settings.uf : null,
        city: typeof settings.city === "string" ? settings.city : null,
        scheduleUiType: typeof settings.scheduleUiType === "string" ? settings.scheduleUiType : null,
        startAt: typeof settings.startAt === "string" ? settings.startAt : null,
        endAt: typeof settings.endAt === "string" ? settings.endAt : null,
        configured: typeof settings.salary === "number" && settings.salary > 0,
      };
      return {
        id: user.id,
        email: user.email || "E-mail indisponível",
        created_at: user.created_at,
        email_confirmed_at: user.email_confirmed_at || null,
        last_sign_in_at: user.last_sign_in_at || null,
        has_state: Boolean(state),
        punches: records.length,
        revision: state?.revision ?? null,
        updated_at: state?.updated_at ?? null,
        settings: publicSettings,
      };
    });
    return respond(200, { accounts, page, perPage, hasNext: (users?.users || []).length === perPage });
  } catch (error) {
    console.error("Falha consulta administrativa", error);
    return respond(500, { error: "Não foi possível consultar as contas" });
  }
});
