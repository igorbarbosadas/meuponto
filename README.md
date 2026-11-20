# Meu Ponto v1.12.10

## Alterações desta versão
- O termo "vale" foi substituído por "adiantamento" na configuração de pagamento.
- O valor do adiantamento usa máscara monetária brasileira, no formato R$ 1.592,22.
- Quando a data de pagamento configurada for dia 31 e o mês não tiver 31 dias, o pagamento é considerado no último dia do mês.
- A seção de fechamento da folha e pagamento tem botão próprio para salvar.
- Os campos do fechamento da folha são preservados automaticamente como rascunho local durante a digitação. Se a página recarregar antes da sincronização, o rascunho é recuperado.
- O rascunho é mantido até que os valores correspondentes sejam confirmados na configuração recebida da conta.
- Mantida a compatibilidade com a configuração interna `advance_salary` e com os campos existentes. Nenhuma migração de dados foi necessária.

## Preservação de dados
- Nenhum registro de ponto existente foi removido ou migrado.
- As preferências novas continuam no objeto de configurações da conta.
- O rascunho temporário é salvo no armazenamento local do navegador, separado por conta.

## Publicação
Substitua `index.html`, `sw.js` e `version.json`. Preserve `config.js`, `admin.html` e as configurações do Supabase. Faça backup antes de publicar.
