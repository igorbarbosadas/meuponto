# Verificações v1.11.5

- Conferir sintaxe JavaScript do painel e aplicativo.
- Conferir estrutura e versão do ZIP.
- Verificar que função `admin-accounts` suporta apenas `list`, `detail` e `export`.
- Verificar autorização por UID presente na função, antes de consultas administrativas.
- Testar no Supabase: admin pode listar/abrir/exportar.
- Testar no Supabase: conta comum recebe HTTP 403.
- Testar no Supabase: UID inexistente não retorna dados.
- Testar no Supabase: alternância e logout não deixam dados de outro usuário acessíveis.
- Testar no Supabase: nenhum registro alterado após as consultas e exportações.

Os testes com o Supabase real não foram executados neste ambiente.
