# Testes do Meu Ponto v1.12.9

## Validações executadas
- Sintaxe dos scripts JavaScript embutidos no index.html.
- APP_VERSION, título, texto da interface, version.json e service worker em 1.12.9.
- Inclusão dos campos de fechamento da folha, forma de pagamento, dia do vale, valor do vale e dia do salário.
- Cálculo da janela de folha com fechamento no dia 15: em 20/11/2026, prévia de 15/11/2026 a 15/12/2026.
- Campos de vale exibidos somente quando selecionado Vale + salário.
- Inclusão de horas em feriado no cálculo da jornada.
- Registro manual retroativo liberado sem alterar a validação do botão de batida rápida.
- Ação rápida mobile conectada à próxima marcação esperada.
- CSS de rolagem horizontal aplicado aos conteúdos roláveis do relatório mobile.

## Testes após publicação
1. Em Ajustes, definir fechamento no dia 15 e conferir a prévia do período.
2. Selecionar pagamento único, informar o dia de pagamento e salvar.
3. Selecionar Vale + salário, preencher dia do vale, valor e dia do salário. Salvar e recarregar a conta.
4. Em Meu ponto, inserir uma batida de uma data anterior à última batida e conferir a ordenação no histórico.
5. No celular, confirmar que o botão destacado alterna entre Bater entrada, Iniciar intervalo, Retornar e Bater saída.
6. Durante jornada em feriado, conferir horas em feriado e horas extras.
7. Abrir Relatórios no celular e testar rolagem vertical e horizontal das tabelas.
8. Confirmar sincronização e preservação dos registros no Supabase.

## Limite da atualização
A janela da folha e o cronograma de pagamento estão configuráveis e visíveis em Ajustes. Os cálculos e gráficos dos Relatórios continuam agrupados por mês-calendário nesta versão. A integração dos cálculos com períodos personalizados da folha deve ser tratada em uma etapa própria.
