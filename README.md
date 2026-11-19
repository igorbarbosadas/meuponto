# Meu Ponto v1.11.1

Correção focada na remoção segura de contas e limpeza dos dados da conta atual.

## Arquivos para publicar no GitHub Pages

- `index.html`
- `version.json`
- `sw.js`

Preserve o `config.js` atual. O código NÃO inclui chave administrativa no navegador.

## Função de exclusão permanente

A exclusão definitiva exige instalar no MESMO projeto Supabase a Edge Function `delete-my-account`, usando o arquivo `supabase/functions/delete-my-account/index.ts`.

Pelo painel Supabase, vá a Edge Functions, crie uma função com nome `delete-my-account`, cole o código e publique. Mantenha verificação de JWT habilitada. O Supabase fornece as variáveis de ambiente do projeto (`SUPABASE_URL`, `SUPABASE_ANON_KEY` e `SUPABASE_SERVICE_ROLE_KEY`). Não copie estas chaves ao `index.html`.

A função autoriza somente a sessão autenticada, usa o ID obtido pelo próprio servidor, apaga a linha `ponto_state` da conta e chama o administrador Auth para eliminar o usuário. Se o Auth falhar, a função tenta restaurar os registros que foram removidos. Os dados de outras contas não são consultados nem alterados.

IMPORTANTE: a implementação usa duas operações diferentes (banco e Auth) e não é uma transação única. Mantenha backup independente antes de testar. A função foi revisada estaticamente, mas ainda precisa de teste real no Supabase.

## Teste recomendado

1. Exportar o backup JSON da conta principal.
2. Criar uma conta nova de teste.
3. Na conta de teste, usar `Limpar os dados desta conta` e confirmar que os campos e batidas ficaram vazios.
4. Entrar na conta principal e conferir que os dados permanecem.
5. Na conta de teste, usar `Excluir minha conta definitivamente`, com senha e confirmação EXCLUIR.
6. Verificar no Supabase Authentication > Users que só a conta de teste foi excluída.
7. Validar a conta principal novamente.
