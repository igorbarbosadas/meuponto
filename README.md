# Meu Ponto v1.11.3

Correção do início de autenticação que podia ficar indefinidamente em “Iniciando autenticação”.

- Limite de 12 segundos para carregar configuração e biblioteca do Supabase.
- Limite de 10 segundos para obter sessão.
- Limite de 15 segundos para ler registros no servidor.
- Mensagem de falha e botão para tentar novamente, sem limpar dados ou sair da conta.
- Nenhuma mudança no banco, nas regras RLS ou nos registros existentes.

Publique index.html, version.json e sw.js. Preserve config.js.
