# Meu Ponto v1.12.21

Base integral da v1.12.20 com nova seção em Relatórios > Conferência do contracheque.

## Novo
- Competência selecionada no relatório tem conferência própria.
- Informe bruto do contracheque (opcional), adiantamento efetivamente recebido, pagamento final e data.
- A comparação financeira usa total recebido = adiantamento + pagamento final. Não mistura valor previsto de adiantamento com recebido.
- Salve conferência, feche competência, reabra ou exclua.
- Uma competência fechada impede edição da conferência, mas **não bloqueia nem modifica batidas**. Se registros mudarem, o sistema alerta que a estimativa foi atualizada.
- Dados sincronizados no objeto `payrollSettlements` do JSON já utilizado no Supabase. Nenhuma migração SQL.

## Publicação
Publique os arquivos do ZIP na raiz do projeto preservando o `config.js` existente no servidor. A publicação não deve excluir os dados nem substituir a configuração pública do Supabase.

## Arquivos modificados
`index.html`, `sw.js`, `version.json`, `README.md`, `LEIA-ME.txt`, `TESTES.md`. Arquivos `admin.html`, ícones, manifesto, logo e funções Supabase foram mantidos.

## Limitações
A conferência depende de preenchimento manual do contracheque. O fechamento é lógico e reversível e não congela as jornadas. Testes end-to-end com conta real/Supabase e navegador publicado ainda são necessários.
