# Meu Ponto v1.12.15

## Correções

- Relatório: o seletor de mês foi substituído por uma lista de folhas pelo mês de fechamento, sem calendário flutuante sobre os botões.
- Relatório: os botões de folha anterior, seguinte e atual continuam disponíveis.
- Gráfico: exibe até seis folhas COM jornadas registradas, em vez de preencher o espaço com cinco ciclos sem dados.
- Gráfico: se não há folhas com dados, informa isso em um bloco compacto.
- Gráfico: colunas de ganhos e descontos continuam separadas por categorias. Os filtros e os totais preservam sua função.
- Início: o acompanhamento apresenta tempo, horas extras, horas em feriado e somente o enquadramento do momento. Os valores financeiros acumulados continuam nos cartões inferiores.
- Início: eliminado o texto repetido de adicionais dentro do enquadramento.

## Dados e segurança

A atualização altera apenas apresentação, seleção da folha e leitura do gráfico. Não exclui batidas, não muda tabelas Supabase nem altera a fórmula de cálculo das jornadas.

Publique index.html, sw.js e version.json. Preserve config.js, admin.html e as funções do Supabase. Faça backup antes da atualização.
