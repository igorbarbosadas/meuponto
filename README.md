# Meu Ponto v1.11.0

Versão de transição para persistência no Supabase. Os registros são carregados exclusivamente da linha pertencente ao usuário autenticado. A gravação usa comparação de revisão e só confirma após resposta do servidor.

ATENÇÃO: sem conexão novas alterações não são confirmadas. Não feche a página enquanto uma alteração estiver pendente. As cópias legadas do navegador não são apagadas, mas não são carregadas automaticamente. Fotos não são armazenadas no Supabase.

Publicação: atualize index.html, version.json e sw.js. Preserve config.js. Não é necessário SQL de migração para a tabela atual. Antes de publicar, exporte um backup da conta antiga. Verifique no Supabase que cada usuário possui sua própria linha em ponto_state, protegida por RLS.
