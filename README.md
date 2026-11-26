# Meu Ponto v1.12.23

Atualização da v1.12.22 para escalas históricas.

## Correção
Na aba Ajustes > Minhas escalas > Escala de períodos anteriores, use "Preencher horários antigos", informe a segunda-feira inicial da semana 1 e a data final em que a escala antiga deixou de valer. Clique em "Salvar escala histórica".

O atalho configura:
- Semana 1: segunda a sexta 08:00–18:00, intervalo 60 min; sábado e domingo folga.
- Semana 2: segunda a sexta 07:00–16:00, intervalo 60 min; sábado 07:00–12:00 sem intervalo; domingo folga.

O período histórico tem prioridade somente nas datas cadastradas. Rodízio atual, coberturas, salário e jornadas registradas permanecem intactos. As configurações de cada registro continuam preservadas em `calcSnapshot`, enquanto apenas a escala histórica prevalece para determinar horário previsto dentro das datas cadastradas. Os dados são salvos em `settings.historicalShiftCycles` dentro da estrutura existente no Supabase.

A data de início deve ser a segunda-feira da semana 1. Não são aceitos intervalos históricos sobrepostos. O sistema não altera as batidas de ponto nem o valor do salário no snapshot.

Mantenha o `config.js` já publicado no servidor. Não há alteração SQL.
