Meu Ponto v1.11.7

Correções:
- Corrigida variável fora do escopo em renderScaleOverview(), que interrompia o aplicativo com "d is not defined".
- Configuração pública e biblioteca Supabase carregadas em paralelo para reduzir o tempo de inicialização quando a rede permite.
- Relógio e atualização contínua não recalculam a interface protegida antes de validar a conta.

Segurança: mantém bloqueio da interface enquanto a conta não tiver dados carregados do Supabase. Não modifica tabela, políticas RLS ou dados gravados.

Publicar index.html, sw.js e version.json. Preservar config.js e admin.html existentes.
