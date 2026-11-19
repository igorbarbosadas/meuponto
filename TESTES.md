# Validação v1.11.6

Checagens estáticas: versão interna, integridade ZIP, JavaScript e existência de arquivos.

Casos que exigem validação manual com o Supabase real:
1. Conta principal: abrir, aguardar os dados e confirmar as seis batidas existentes.
2. Conta recém-criada: nenhuma batida e nenhum salário/escala inicial.
3. Desconectar internet antes de abrir uma sessão: manter tela bloqueada, mostrar botão de reconexão.
4. Reconectar e tentar novamente: liberar tela somente após leitura da própria conta.
5. Registrar batida e aguardar confirmação do servidor antes de sair.
6. Conferir RLS: uma conta comum não pode ler nem escrever `ponto_state` de outra.

Não afirmar homologação antes dessas verificações.
