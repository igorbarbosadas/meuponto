# Testes Meu Ponto v1.12.27

## Locais
- Verificação de sintaxe JavaScript.
- Verificação do arquivo ZIP, `version.json` e do cache do Service Worker.
- Verificação de ausência de IDs HTML duplicados.
- Verificação de prioridades e horários nas coberturas fixas e em semanas alternadas.

## Testes após publicar
1. Confirmar que a escala efetiva continua salva e independente de qualquer cobertura.
2. Cadastrar cobertura antiga com semanas alternadas e conferir sábado de folga na semana 1 e sábado trabalhado na semana 2.
3. Confirmar que o fim de cobertura faz o sistema retornar à escala efetiva.
4. Verificar que as batidas não mudam após registrar ou excluir cobertura.
5. Recarregar a página e conferir que a cobertura permanece sincronizada.
6. Revisar registros históricos anteriores, inclusive os salvos na v1.12.23.

## v1.12.27
- Testar entrada 07:14 para escala 07:00: 14 minutos de atraso bruto.
- Testar entrada 08:04 para escala 08:00: 4 minutos de atraso bruto.
- Testar entrada 08:11 para escala 08:00: 11 minutos de atraso bruto.
- Conferir se nenhum valor é abatido automaticamente do salário.
- Conferir cobertura histórica e registros no Supabase após publicar.

### v1.12.27 - regressões a conferir na conta
- 06/11/2026: cobertura 07h-16h, batidas 06h57 e 16h04, intervalo 1h. Saída prevista 16h, extra estimada 0h00.
- Entradas com atraso em 20/10, 28/10 e 29/10: atraso bruto separado de descontos oficiais.
- Jornadas noturnas e cobertura de semanas alternadas: conferir retorno ao horário efetivo.
- Publicação: verificar sincronização real antes de usar os totais como folha oficial.

v1.12.27: tolerância configurável por marcação, atrasos brutos e após tolerância, sem desconto automático.
