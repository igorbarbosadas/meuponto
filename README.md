# Meu Ponto v1.10.8 · correção emergencial de isolamento

Altera a leitura e gravação do cache local para chaves por ID de usuário. Não faz importação automática do cache legado meuponto_v1. Bloqueia alterações antes de leitura remota bem-sucedida. Desativa temporariamente apagar todas as batidas e importar backup. Não apaga dados antigos do browser.

ATENÇÃO: Esta atualização reduz risco, mas não garante restauração dos dados apagados anteriormente. Faça backups e verifique a tabela ponto_state no Supabase. Não execute SQL DELETE nem TRUNCATE. Testes em ambiente Supabase real pendentes.

Publique index.html, version.json e sw.js. Preserve config.js.
