# Testes de v1.11.4

- Verificação estrutural do ZIP e presença de arquivos.
- Sintaxe do JavaScript do painel com Node.js.
- Controle de acesso implementado no servidor, não somente na interface.
- Renderização de e-mail e identificadores com textContent para prevenir injeção HTML.
- Sem funções administrativas de escrita/remoção.

Pendências de homologação:
1. Publicar a Edge Function `admin-accounts` e configurar `ADMIN_USER_IDS`.
2. Testar acesso como administrador permitido.
3. Testar acesso negado para usuário comum e não autenticado.
4. Conferir que ambas as contas mostram IDs, e-mails e números de batidas corretos.
5. Testar consulta com múltiplas páginas se houver mais de 100 contas.
