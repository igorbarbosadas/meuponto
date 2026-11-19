# Validação v1.10.9

Verificações estáticas: sintaxe dos scripts, manifestos e integridade ZIP.

Testes reais pendentes:
1. Conta antiga mostra suas batidas e configurações da nuvem.
2. Conta nova, sem linha em ponto_state, não mostra salário, horários e dias de outra conta.
3. Conta nova não permite registrar batida sem configurar perfil.
4. Configurar perfil na conta nova não altera o registro da conta antiga.
5. Sair e entrar alternadamente em ambas as contas mantém dados isolados.
6. Alterações pendentes preservadas por conta e conflitos não sobrescrevem registros.

Não homologado em Supabase real nesta entrega.
