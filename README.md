# Meu Ponto

**Controle sua jornada de trabalho e acompanhe seus ganhos em um só lugar.**

[**Abrir o aplicativo**](https://igorbarbosadas.github.io/meuponto/) · Versão **1.9.0** · Web app instalável (PWA)

O **Meu Ponto** é um aplicativo para registrar entradas e saídas, consultar jornadas anteriores e estimar adicionais de salário. Foi desenvolvido para ser simples de usar no celular ou no computador, com login e sincronização pelo Supabase.

> **Sobre as imagens:** as capturas são exemplos reais da interface enviados durante o desenvolvimento. Algumas foram feitas na v1.8.0. A aparência e os valores variam conforme a versão e os registros da sua conta. Os valores exibidos são ilustrativos e não representam um contracheque.

## Conheça o aplicativo

<table>
  <tr>
    <td align="center" width="50%"><strong>Início</strong><br/>Jornada ativa e estimativa dos ganhos</td>
    <td align="center" width="50%"><strong>Meu ponto</strong><br/>Batidas, correções e calendário</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/imagens/inicio-mobile.png" alt="Exemplo da tela inicial do Meu Ponto" width="225"/></td>
    <td align="center"><img src="docs/imagens/meu-ponto-mobile.png" alt="Exemplo da tela Meu ponto" width="225"/></td>
  </tr>
  <tr>
    <td align="center"><strong>Relatórios</strong><br/>Horas, adicionais e previsão salarial</td>
    <td align="center"><strong>Ajustes</strong><br/>Regras, escala, feriados e dados</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/imagens/relatorios-mobile.png" alt="Exemplo de relatórios no celular" width="225"/></td>
    <td align="center"><img src="docs/imagens/ajustes-mobile.png" alt="Exemplo de ajustes no celular" width="225"/></td>
  </tr>
</table>

## O que você pode fazer

| Recurso | Como funciona |
| --- | --- |
| **Registrar batidas** | Registre entrada e saída pelo horário do dispositivo ou informe a data e hora manualmente. |
| **Corrigir registros** | Consulte, edite ou exclua batidas incorretas. |
| **Intervalo** | Configure desconto automático do intervalo ou marcações específicas, conforme a sua jornada. |
| **Escala** | Escolha dias habituais de trabalho e faça exceções para folgas ou dias trabalhados. |
| **Feriados** | Cadastre datas e configure o adicional aplicável. |
| **Ganhos em tempo real** | Veja a estimativa da jornada aberta, das horas extras e do adicional noturno. |
| **Calendário** | Identifique jornadas concluídas, abertas e datas previstas sem registro. |
| **Relatórios** | Consulte horas efetivas, horas computadas, extras, adicionais, DSR e estimativas de salário bruto e líquido. |
| **Backup** | Exporte registros em JSON ou CSV e importe um backup quando necessário. |
| **Nuvem** | Autentique-se e sincronize dados por meio do Supabase. |

### Exemplo de relatório no computador

![Exemplo do relatório mensal no desktop](docs/imagens/relatorios-desktop.png)

O relatório reúne os indicadores do mês, os adicionais acumulados e um demonstrativo do cálculo. Há também o acompanhamento semanal e a situação das jornadas registradas.

## Como usar

1. Acesse [igorbarbosadas.github.io/meuponto](https://igorbarbosadas.github.io/meuponto/).
2. Entre com sua conta. Se for seu primeiro acesso, use **Criar conta**.
3. Em **Ajustes**, configure salário-base, divisor mensal, percentuais, horário da jornada e intervalo.
4. Defina os dias da escala e os feriados que afetam seu trabalho.
5. Em **Início** ou **Meu ponto**, registre uma entrada quando começar a trabalhar.
6. Registre a saída ao terminar. Se esqueceu uma batida, use o lançamento manual e confira a data.
7. Consulte **Meu ponto** para corrigir registros e **Relatórios** para acompanhar o mês.

### Exemplo prático

Uma pessoa que trabalha das **22h às 5h20**, com **60 minutos de intervalo**, pode cadastrar esse turno em Ajustes. O aplicativo calcula estimativas de horas e adicionais de acordo com as opções configuradas. Jornadas que atravessam a meia-noite continuam associadas ao registro correspondente.

**Atenção:** os valores financeiros são estimativas. Convenções coletivas, banco de horas, intervalos, feriados, fechamento da folha e outros descontos podem mudar o contracheque. O cálculo exibido deve ser conferido com o espelho de ponto e a folha de pagamento.

## Instalar no celular

**Android**

1. Abra o site no Chrome.
2. Use **Instalar aplicativo** ou **Adicionar à tela inicial** no menu do navegador, quando disponível.
3. Abra o Meu Ponto pelo ícone criado.

**iPhone**

1. Abra o endereço no Safari.
2. Toque em **Compartilhar**.
3. Escolha **Adicionar à Tela de Início**.

O Meu Ponto v1.9.0 inclui manifesto e service worker para permitir a instalação e o carregamento básico offline após o primeiro acesso. O uso offline depende de uma sessão e de dados locais já disponíveis. A autenticação junto ao servidor e a sincronização exigem internet.

## Sincronização e privacidade

- O login utiliza o **Supabase Auth**.
- Os registros associados à conta ficam em uma tabela com políticas de acesso por usuário (**Row Level Security**, RLS).
- O aplicativo mantém dados locais para permitir continuidade do uso, inclusive quando a conexão falha.
- Quando disponível, a sincronização comunica as alterações ao servidor. **Não apague dados locais antes de confirmar que seus registros foram sincronizados.**
- O arquivo `config.js` contém somente o endereço e a **chave publicável** do projeto Supabase. Como o site roda no navegador, esse arquivo **não é secreto**. Nunca inclua a chave `service_role` ou uma chave secreta.
- As fotos anexadas aos comprovantes podem permanecer apenas no dispositivo, conforme os recursos da versão.

> O isolamento de usuários depende também das políticas e permissões configuradas no Supabase. A proteção de registros entre dispositivos e a restauração de backups devem ser testadas antes de depender do aplicativo como fonte única.

## Estrutura dos arquivos

```text
meuponto/
├── index.html             # Interface e lógica do aplicativo
├── config.js              # URL e chave PUBLICÁVEL do Supabase (criado/configurado à parte)
├── version.json           # Versão disponibilizada
├── manifest.webmanifest   # Configuração de instalação PWA
├── sw.js                  # Service worker e cache do app
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── docs/
│   └── imagens/           # Capturas usadas neste README
└── README.md              # Apresentação e instruções
```

## Publicação no GitHub Pages

O aplicativo pode ser publicado por **GitHub Pages**, a partir da raiz da branch usada para o site. Para atualizar a versão, publique `index.html`, `version.json`, `manifest.webmanifest`, `sw.js` e a pasta `icons/` quando houver mudanças nesses arquivos.

**Preserve seu `config.js` válido.** O pacote de apresentação não deve substituir a configuração em produção. Faça um backup JSON dos registros antes de atualizar e confira a versão e a sincronização após a publicação.

## Tecnologias

HTML, CSS, JavaScript, PWA (manifesto e service worker), Supabase Auth e banco de dados Supabase.

## Estado do projeto

**Versão documentada: 1.9.0.** O aplicativo está em evolução. A etapa seguinte é a validação de instalação, atualização, sincronização entre dispositivos, funcionamento offline, segurança e conferência dos cálculos com registros reais.

---

Desenvolvido para tornar o acompanhamento de ponto e ganhos mais claro, com histórico consultável e acesso pelo celular ou computador.
