# Meu Ponto v1.9.9 — conferência do demonstrativo

Os valores do aplicativo são estimativas. A v1.9.9 adiciona TOTAL ESTIMADO DO DIA = parcela normal + parcelas variáveis. A parcela normal já faz parte do salário-base mensal.

## Conferência das capturas de 16 a 18/11/2026

| Dia | Entrada–saída | Efetivas (intervalo de 1h) | Parcela normal | Noturno | Extras | Total variável | Total do dia |
|---|---|---|---:|---:|---:|---:|---:|
| 16/11 | 20:47–05:30 | 7h43 | R$ 130,94 | R$ 26,91 | R$ 38,46 | R$ 65,37 | R$ 196,31 |
| 17/11 | 20:49–05:39 | 7h50 | R$ 130,94 | R$ 27,54 | R$ 42,02 | R$ 69,56 | R$ 200,50 |
| 18/11 | 20:53–05:42 | 7h49 | R$ 130,94 | R$ 27,75 | R$ 41,81 | R$ 69,57 | R$ 200,51 |

**Pendência de regra trabalhista:** na configuração atual (modo baseado em horário), o aplicativo considera horas antes do início contratual e após o fim contratual como extras. A classificação exige confirmação com acordo/espelho de ponto.

**Pendência de intervalo:** os horários exatos da pausa não foram informados. A distribuição de adicional noturno e extras assume o intervalo automático estimado pelo aplicativo, e pode divergir da folha.

A sintaxe JavaScript foi verificada. Não foi possível testar autenticação nem sincronização real com Supabase.

O total variável de 18/11 pode apresentar diferença de R$ 0,01 quando comparado à soma das parcelas mostradas, porque o aplicativo acumula frações antes de arredondar na exibição.
