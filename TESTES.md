# Testes da v1.12.20

Verificados com execução de testes unitários sobre a função calculate extraída do index.html, usando salário-base hipotético de R$ 2.200, divisor 220 e alíquota de feriado de 100%:

- Turno 08:00–17:00 com 60 minutos de intervalo: 8h efetivas, R$ 80 de parcela normal, sem adicional.
- Turno 07:00–18:00, com janela prevista 08:00–17:00: 2h extras, R$ 30 na rubrica de extras a 50%.
- Trabalho 08:00–17:00 em feriado considerado folga: 8h em feriado, R$ 160 na rubrica de feriado e R$ 0 na rubrica de extras a 50%.
- Feriado na escala com compensação: R$ 0 de adicional de feriado.
- Feriado na escala com adicional: R$ 80 de parcela de feriado, sem duplicar as R$ 80 de hora normal que já integram o salário-base.
- Compatibilidade de snapshots legados: cálculo antigo de feriado regular preservado no teste.
- Cálculo de INSS e IR de 2026: testada a consistência algébrica do líquido para R$ 3.980, R$ 5.000, R$ 5.500, R$ 7.350, R$ 8.000 e R$ 9.000.
- Sintaxe JavaScript dos cinco scripts aprovada com node --check.
- Integridade do ZIP verificada.

Pendente: conferir os cálculos da jornada real, horários noturnos, DSR e regras coletivas com contracheque; validar sincronização Supabase e visual no navegador publicado.
