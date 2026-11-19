# Meu Ponto v1.10.7

Correção do fluxo de confirmação de e-mail para a hospedagem estática no GitHub Pages.

- Fluxo de autenticação por link compatível com abertura em outro navegador.
- Endereço de retorno explícito no cadastro e no reenvio de confirmação.
- Botão **Reenviar confirmação** na tela de acesso.
- Mensagens legíveis quando o link expira ou falha.
- Correção da versão interna exibida no código, que ainda apontava para 1.10.5.

Não foi alterada a estrutura do Supabase nem os registros salvos.

**Publicação:** substitua `index.html`, `version.json` e `sw.js`; preserve o `config.js` atual. Em Authentication → URL Configuration configure Site URL e Redirect URLs com `https://igorbarbosadas.github.io/meuponto/`.

**Importante:** links já enviados pelo fluxo anterior podem continuar com falha. Após publicar, use **Reenviar confirmação** para emitir um novo link.
