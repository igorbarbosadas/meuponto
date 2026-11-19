# Meu Ponto v1.11.2

Correção do bloqueio indevido ao excluir uma conta.

## O que mudou
- Aguarda leituras da nuvem em andamento antes de verificar a exclusão.
- Faz uma nova leitura do Supabase caso a sessão ainda não tenha sido validada.
- Verifica a senha em um cliente Supabase temporário e isolado, sem substituir a sessão principal.
- Exibe mensagens diferentes para gravações pendentes, conexão falha, sessão expirada e função ausente.
- Mantém a exclusão limitada ao usuário autenticado e preserva as demais contas.

## Publicação
Atualize `index.html`, `version.json` e `sw.js`. Preserve o arquivo `config.js` existente.

A exclusão permanente depende da Edge Function `delete-my-account` publicada no mesmo projeto Supabase. O código da função está incluído em `supabase/functions/delete-my-account/index.ts`. A função precisa ser instalada separadamente no painel do Supabase. Não coloque a chave `service_role` no navegador.

## Cuidados
Teste apenas com uma conta descartável e confira o resultado em Authentication > Users e Table Editor > ponto_state. Guarde o backup dos dados importantes. A exclusão no Auth e na tabela não é transação atômica.
