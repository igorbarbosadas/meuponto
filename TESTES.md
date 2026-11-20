# Testes do Meu Ponto v1.12.10

## Validações técnicas executadas
- Sintaxe dos scripts JavaScript embutidos no index.html.
- Versão 1.12.10 alinhada entre interface, APP_VERSION, version.json e service worker.
- Texto da seção alterado para Adiantamento.
- Campo de valor configurado como texto com máscara monetária brasileira.
- Botão próprio `Salvar fechamento e pagamento` presente na seção.
- Rascunho local separado por conta e com prazo de expiração de sete dias.
- Recuperação do rascunho após `reloadSettingsUI`, inclusive quando a sincronização falha.
- Datas de pagamento ajustadas ao último dia do mês quando o dia solicitado não existe.
- Compatibilidade mantida com `advance_salary` e com o formato de configurações existente.

## Testes após publicação
1. Digitar o valor do adiantamento e confirmar a máscara R$ 1.592,22.
2. Atualizar a página antes de salvar e confirmar que os campos são recuperados.
3. Salvar pelo botão próprio e conferir a sincronização da conta.
4. Configurar pagamento no dia 31 e verificar fevereiro, abril, junho, setembro e novembro.
5. Confirmar que um mês com 30 dias usa o dia 30 e fevereiro usa 28 ou 29 conforme o ano.
6. Recarregar a página após a confirmação e verificar que o rascunho foi substituído pelos dados salvos.
7. Conferir que os registros de ponto e os demais ajustes continuam preservados.

## Limite da validação
A sintaxe, a estrutura dos campos e as funções de cálculo foram verificadas localmente. A confirmação de gravação no Supabase depende de teste no ambiente publicado e na conta do usuário.
