# Meu Ponto v1.11.4

Nova página administrativa independente `admin.html`, com consulta somente leitura das contas.

## Publicação no GitHub Pages
Envie `admin.html`, `index.html`, `version.json` e `sw.js`. Preserve `config.js` que já está no repositório.

## Configuração Supabase
1. Supabase > Edge Functions > Secrets. Cadastre `ADMIN_USER_IDS` com o UUID do usuário administrador (coluna `auth.users.id`). Para múltiplos administradores, separe UUIDs com vírgula. NÃO use e-mails para autorização.
2. Supabase > Edge Functions > Deploy a new function > Via Editor. Nome EXATO: `admin-accounts`. Cole o código de `supabase/functions/admin-accounts/index.ts` no editor e publique com verificação JWT habilitada (compatível com chave anon JWT existente).
3. Acesse https://igorbarbosadas.github.io/meuponto/admin.html após entrar na conta autorizada.

## Segurança
- A chave de administrador permanece exclusivamente na Edge Function.
- A lista de contas só é retornada após verificação de token e de `ADMIN_USER_IDS` no servidor.
- Nenhuma operação de exclusão ou alteração é disponibilizada nesta versão.
- Paginação com 100 contas por página. Busca e filtros operam sobre a página atual.
- Contas excluídas não podem ser listadas com `auth.admin.listUsers` sem trilha de auditoria prévia.
- Esta entrega não altera a tabela `ponto_state`, seus registros nem a Edge Function `delete-my-account`.
- Testes reais com o Supabase e autorização entre contas ainda são necessários.
