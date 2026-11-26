# Testes Meu Ponto v1.12.24.1.1

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
