# Meu Ponto v1.10.9

Correção de isolamento e inicialização de novas contas.

- Contas sem registros no Supabase iniciam sem salário, divisor, horários, dias ou município definidos.
- Nenhum cache local de conta sem alterações pendentes é usado como perfil de inicialização.
- Contas existentes seguem carregando suas próprias configurações do Supabase.
- O e-mail autenticado aparece em Conta e sincronização.
- A primeira batida exige salário, divisor e escala configurados.
- A leitura de nuvem usa o ID da conta capturado no início de cada operação.
- Horário de última sincronização é separado por conta.
- Cache local antigo e cópias de recuperação não são apagados.

Publique index.html, sw.js e version.json, mantendo config.js atual.
Não execute SQL nem apague caches ou registros antes dos testes.
