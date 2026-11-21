# Meu Ponto v1.12.12

## Alterações
- Calendário personalizado e uniforme em todos os campos de data, mês e data/hora.
- Calendário de escala com visual atualizado.
- Relatórios organizados por ciclo de fechamento da folha.
- Ciclos sem sobreposição: o dia de fechamento é o limite e as batidas a partir dele pertencem ao próximo ciclo.
- Gráfico histórico, composição salarial, ganhos, descontos, DSR e demonstrativo passam a considerar ciclos de folha.
- Resumo financeiro da tela inicial alinhado à folha atual.
- Prévia do próximo recebimento após o fechamento.

## Exemplo
Com fechamento no dia 15, o ciclo exibido como 15/11 a 15/12 considera as batidas de 15/11 até 14/12. A partir de 15/12, as batidas entram no próximo ciclo. Isso evita que uma mesma jornada apareça em duas folhas.

## Publicação
Substitua `index.html`, `sw.js` e `version.json` no GitHub Pages. Preserve `config.js`, `admin.html`, `supabase/`, `assets/`, `icons/`, o projeto Supabase, as tabelas e as políticas RLS. Não há migração SQL nesta versão.
