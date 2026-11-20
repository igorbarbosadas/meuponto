# Testes da v1.12.8

## Validações executadas
- Sintaxe dos quatro scripts JavaScript embutidos no index.html: aprovada.
- APP_VERSION, texto da interface, version.json e versão do service worker: todos em 1.12.8.
- Lógica do aviso: versão instalada igual à publicada oculta o banner. Quando a versão publicada é superior, o aviso permanece disponível.
- Cálculo isolado: jornada normal, hora extra, feriado, adicional noturno e intervalo manual: aprovados.
- Renderização isolada: rótulos de jornada normal, hora extra, trabalho em feriado, adicional noturno e intervalo: aprovados.
- admin.html, Edge Functions, assets, ícones e manifest.webmanifest comparados com a v1.12.7: preservados sem alterações.

## Conferência após publicação
- Abrir o aplicativo em uma aba nova e confirmar que o aviso da v1.12.7 não aparece mais.
- Conferir a classificação durante uma jornada normal.
- Conferir a mudança para hora extra após o horário previsto.
- Conferir adicional noturno e feriado conforme a regra salva na entrada.
- Iniciar intervalo manual e confirmar o estado Em intervalo.
- Confirmar os mesmos dados após sincronização com Supabase.

A validação final no navegador publicado e na conta Supabase depende da publicação do pacote.
