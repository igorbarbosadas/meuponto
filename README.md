# Meu Ponto v1.11.5

Ampliação do painel administrativo em `admin.html`, sem alterações na estrutura `ponto_state` nem nas batidas.

## Recursos
- Lista de contas com e-mail, UID, status e batidas, paginada de 100 em 100.
- Ficha detalhada por usuário, buscada apenas após selecionar a conta.
- Abas: Resumo, Configurações, Batidas, Feriados armazenados, Exceções.
- Exportação JSON completa do estado da conta selecionada, mediante autorização do administrador.
- Todas as ações são **somente leitura**. Não há exclusão, limpeza ou edição administrativas.

## Como publicar
1. No GitHub Pages, atualize `admin.html`, `index.html`, `version.json` e `sw.js`.
2. Preserve o `config.js` publicado.
3. No Supabase, **republique** a função `admin-accounts` com o arquivo `supabase/functions/admin-accounts/index.ts` da versão 1.11.5. Não altere `delete-my-account`.
4. Preserve o secret `ADMIN_USER_IDS` com o UUID do administrador.
5. Acesse `https://igorbarbosadas.github.io/meuponto/admin.html` com a conta autorizada.

## Segurança
A função confirma o token do Supabase e exige que o UID esteja em `ADMIN_USER_IDS` antes de acessar dados de qualquer usuário. Nunca coloque `SUPABASE_SERVICE_ROLE_KEY` no GitHub ou navegador. Nenhum SQL necessário.

A exportação JSON contém dados pessoais e de jornada. Guarde em local protegido e exclua cópias de teste quando não forem mais necessárias. O painel não mostra senhas ou tokens.

## Limitações
- A busca e os filtros atuam sobre a página atual de até 100 contas.
- Feriados automáticos gerados em tempo de execução podem não aparecer no JSON `holidays`.
- Ainda requer testes completos com Supabase real, autenticação administrativa e conta comum.
