# Meu Ponto v1.12.13

## Atualizações
- Corrigida a virada da folha quando o dia de fechamento configurado é maior que a quantidade de dias do mês. Exemplo: dia 31 passa a ser o último dia de fevereiro.
- O ciclo de folha é determinado pela data local inteira. Uma jornada iniciada no dia do fechamento é atribuída ao ciclo seguinte, independentemente do horário da consulta.
- Na tela Relatórios, é possível navegar entre folhas usando Anterior, Próxima e Folha atual, além do seletor personalizado de mês.
- O período selecionado é classificado como ciclo em andamento, encerrado ou futuro.
- Quando a folha não contém jornadas, os indicadores resumidos de bruto e líquido mostram “Sem dados”, evitando apresentar uma remuneração histórica como confirmada.
- Uma folha encerrada não incorpora jornadas dos ciclos seguintes. Correções retroativas ainda podem atualizar os valores do ciclo antigo.

- O relatório não é reconstruído a cada segundo enquanto você o consulta. Isso evita que o gráfico e a rolagem horizontal voltem ao início no celular.

## Segurança
Não foram alteradas as tabelas, políticas de segurança, permissões, autenticação ou registros existentes do Supabase. O `config.js` deve ser preservado.

## Limitações
O ciclo encerrado é uma consulta dos registros vinculados a ele, não uma folha oficialmente homologada. Alterar a configuração de fechamento posteriormente pode redistribuir jornadas entre períodos históricos. Os valores de salário, DSR e descontos continuam sendo estimativas até conferência com o contracheque.

## Publicação
Atualize `index.html`, `sw.js` e `version.json` no GitHub Pages. Preserve `config.js`, `admin.html`, as funções do Supabase e os demais arquivos existentes.
