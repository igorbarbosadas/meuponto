# Testes da v1.12.23

## Validações locais concluídas
- Todos os scripts inline passaram em `node --check`.
- HTML sem IDs duplicados e com campos de início, fim, preenchimento de horários antigos e lista de períodos históricos.
- Testes de 6 datas: primeira semana 08h–18h, sábado de folga, segunda semana 07h–16h, sábado 07h–12h, repetição do ciclo e retorno à escala atual fora do período histórico.
- Escalas históricas são persistidas em `settings.historicalShiftCycles`, sem alterar o esquema do Supabase.
- Função de cálculo mantém o salário e as regras do snapshot da jornada e lê apenas o intervalo histórico atual para calcular o horário previsto.

## Validações necessárias após publicar
- Salvar período histórico em conta real e recarregar a página para confirmar sincronização.
- Confirmar valores recalculados de jornadas antigas em Relatórios e Histórico.
- Confirmar que datas após o fim da escala histórica continuam usando a escala noturna atual.
- Validar telas no computador e no celular.
- Validar que a data real do início da semana 1 e o intervalo informado correspondem ao histórico de trabalho.
