# Meu Ponto v1.12.9

## Alterações desta versão
- Adicionadas configurações do ciclo da folha: dia de fechamento, pagamento único ou vale + salário, datas e valor do vale.
- Incluída prévia do período da folha. Exemplo: fechamento no dia 15, período de 15/11/2026 a 15/12/2026.
- O relatório mensal continua organizado por mês-calendário. A configuração do ciclo da folha ainda não muda a competência dos gráficos e cálculos.
- O registro manual agora aceita batidas retroativas, inclusive quando existem batidas posteriores. O registro rápido continua exigindo a sequência normal.
- O acompanhamento da jornada mostra horas trabalhadas, horas extras e horas em feriado.
- O menu inferior do celular ganhou uma ação de ponto que muda entre entrada, intervalo, retorno e saída.
- Ajustes de rolagem horizontal em tabelas e conteúdos do relatório no celular.
- Textos de sincronização reduzidos: carregando, dados carregados, salvando, salvo e erro.

## Preservação de dados
- Não foram alterados registros existentes nem tabelas do Supabase.
- As novas preferências da folha são gravadas no objeto de configurações da conta conectada.
- Os registros de ponto continuam sendo salvos no Supabase, sem migração destrutiva.

## Publicação
Substitua `index.html`, `sw.js` e `version.json`. Preserve `config.js`, `admin.html` e as configurações do Supabase. Faça backup antes de publicar.
