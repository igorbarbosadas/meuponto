# Testes Meu Ponto v1.12.12

## Verificações estáticas
- Sintaxe JavaScript do aplicativo e do calendário personalizado.
- Integridade dos IDs de versão e cache do service worker.
- Ausência de seletor nativo visível nos campos `date`, `datetime-local` e `month`.
- Funções de seleção de ciclos por mês de fechamento.
- Filtro de jornadas pelo intervalo semiaberto `[início, fechamento)`, sem sobreposição entre ciclos.
- Cálculo de ganhos, descontos, DSR e composição salarial por ciclo.

## Testes manuais após publicação
1. Abrir todos os campos de data em desktop e celular e confirmar que usam o mesmo calendário.
2. Inserir uma batida retroativa e confirmar que o horário é mantido no servidor.
3. Com fechamento no dia 15, confirmar que a folha com fechamento em 15/12 inclui batidas de 15/11 a 14/12.
4. Confirmar que batidas a partir de 15/12 aparecem apenas na folha seguinte.
5. Selecionar uma folha anterior e confirmar que seus valores e jornadas permanecem separados do ciclo atual.
6. Conferir o próximo pagamento previsto para a folha selecionada.
7. Confirmar estados de sincronização Salvo, Sincronizando e Erro com a conta real no Supabase.

A validação de sincronização em produção depende do teste com a conta real. Nenhuma operação de banco ou exclusão de dados é executada por esta atualização.
