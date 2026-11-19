import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.49.4";

// A chave administrativa permanece SOMENTE no ambiente da Edge Function.
const origin = "https://igorbarbosadas.github.io";
const headers = {
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
  "Content-Type": "application/json; charset=utf-8",
};
const reply = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers });

serve(async (request: Request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST") return reply(405, { error: "Método não permitido" });
  if (request.headers.get("origin") !== origin) return reply(403, { error: "Origem não autorizada" });
  const bearer = request.headers.get("authorization") || "";
  if (!bearer.startsWith("Bearer ")) return reply(401, { error: "Sessão ausente" });
  const token = bearer.slice(7);
  const url = Deno.env.get("SUPABASE_URL");
  const publishable = Deno.env.get("SUPABASE_ANON_KEY");
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !publishable || !secret) return reply(503, { error: "Função sem configuração do Supabase" });
  try {
    const body = await request.json();
    if (body?.confirmation !== "EXCLUIR") return reply(400, { error: "Confirmação inválida" });
    const userClient = createClient(url, publishable, { auth: { persistSession: false } });
    const { data: auth, error: authError } = await userClient.auth.getUser(token);
    if (authError || !auth.user) return reply(401, { error: "Sessão inválida" });
    const userId = auth.user.id; // Nunca aceitar user_id enviado pelo cliente.
    const admin = createClient(url, secret, { auth: { persistSession: false, autoRefreshToken: false } });

    // Salvar o estado para restaurar caso a remoção no Auth falhe.
    const { data: old, error: readError } = await admin.from("ponto_state")
      .select("data,revision").eq("user_id", userId).maybeSingle();
    if (readError) return reply(500, { error: "Não foi possível verificar os registros. Nada foi excluído." });
    if (old) {
      const { error: deleteStateError } = await admin.from("ponto_state").delete().eq("user_id", userId);
      if (deleteStateError) return reply(500, { error: "Não foi possível excluir os registros da conta." });
    }
    const { error: deleteAuthError } = await admin.auth.admin.deleteUser(userId);
    if (deleteAuthError) {
      // Tentativa de recuperação dos dados. Reportar falha mesmo se recuperar.
      if (old) {
        const { error: restoreError } = await admin.from("ponto_state")
          .upsert({ user_id: userId, data: old.data, revision: old.revision }, { onConflict: "user_id" });
        if (restoreError) console.error("Restauracao falhou para usuario", userId, restoreError.message);
      }
      return reply(500, { error: "Não foi possível concluir a exclusão. Confira a conta antes de tentar novamente." });
    }
    return reply(200, { deleted: true });
  } catch (error) {
    console.error("Falha interna na exclusão:", error);
    return reply(500, { error: "Erro ao excluir a conta. Nenhuma confirmação foi emitida." });
  }
});
