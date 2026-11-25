# Meu Ponto v1.12.23. Testes recomendados

1. Login e reabertura: validar carregamento de dados da conta correta.
2. Bater entrada, intervalo, retorno e saída: confirmar status Salvo e persistência após F5.
3. Dois dispositivos: alterar em um, aguardar a verificação periódica (até 2 minutos) e confirmar atualização no outro.
4. Modo offline: alterações não devem ser confirmadas nem atribuídas à nuvem.
5. Relatórios: rolar horizontalmente e verificar se a lista não é reconstruída a cada segundo.
6. Jornada em andamento: comparar os indicadores antes/depois de 30 segundos e conferir cálculos.
7. Painel administrativo, exclusão da conta e conferência do contracheque: executar testes de regressão.
8. Validar no navegador real a latência do Supabase. Nenhum benchmark foi executado sem credenciais.

Observação: a fonte é a v1.12.20 enviada pelo usuário; correções posteriores da v1.12.21/v1.12.22 não estão neste pacote.
Configuração: publicar o `config.js` já existente em produção; o ZIP original não o contém.
