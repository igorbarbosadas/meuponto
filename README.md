Meu Ponto v1.11.9

Novidades:
- Escolha explícita de dias no rodízio, com resumo dos dias de destino.
- Congelamento dos parâmetros de cálculo por jornada concluída ao alterar configurações, inclusive para batidas antigas sem snapshot.
- Projeção do fechamento mensal separada dos valores já registrados, baseada na média de jornadas concluídas.
- Descontos personalizados mensais ou por competência, abatidos após os descontos legais estimados.

Arquivos a publicar: index.html, version.json e sw.js. Preserve config.js e admin.html.
O app só confirma salvamento após resposta do Supabase. Não é necessário SQL.
Limites: projeção usa média histórica da competência; não substitui folha. Fotos de comprovantes não são persistidas no servidor.
