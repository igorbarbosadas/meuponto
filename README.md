# Meu Ponto v1.11.6

Atualização focada em segurança na abertura de sessão e isolamento visual de contas.

- A interface de dados permanece bloqueada até uma leitura bem-sucedida do Supabase para a conta autenticada.
- Falha de leitura oferece nova tentativa, sem abrir um painel vazio que possa parecer perda de registros.
- O botão de reconexão repete a leitura para a conta atual.
- O formulário de login é restaurado ao sair da conta.
- Ajustados textos e valores de exemplo que davam a impressão de ser a escala de todos os usuários.
- Nenhuma mudança em tabela ou políticas RLS.
- `config.js` não é incluído. Preserve o arquivo já publicado.

A gravação ainda usa fila na memória da página. Falha de conexão impede confirmação. Testes em Supabase real não foram realizados no ambiente de geração.
