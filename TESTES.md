# Testes v1.12.13

## Executados
- Verificação de sintaxe dos cinco blocos JavaScript incluídos no HTML.
- Teste de calendário para cada dia de 2025, 2026, 2027 e 2028, com fechamentos nos dias 1, 15, 28, 30 e 31.
- Teste de fevereiro comum e bissexto com fechamento configurado para o dia 31.
- Teste de fechamento em 15/12/2026: entrada de 15/11 incluída e data de 15/12 atribuída ao ciclo seguinte.
- Verificação dos arquivos de versão e integridade do ZIP.

- Teste de sintaxe após ajuste que preserva a rolagem dos relatórios no celular.

## Pendências após publicar
1. Confirmar navegação entre folhas no celular e desktop e atualização do texto do seletor de mês.
2. Conferir que batidas retroativas entram apenas no ciclo da data de entrada.
3. Testar três situações do relatório: folha corrente, anterior encerrada e futura sem registros.
4. Validar sincronização das contas reais com o Supabase.
5. Comparar demonstrativo com contracheque para verificar diferenças de DSR, INSS, IRRF e adicionais.
