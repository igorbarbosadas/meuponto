# Testes do Meu Ponto v1.12.11

## Validações automatizadas previstas
- Sintaxe dos scripts JavaScript embutidos no `index.html`.
- Versão 1.12.11 alinhada entre interface, `APP_VERSION`, `version.json` e service worker.
- Existência dos estados canônicos Salvo, Sincronizando e Erro.
- Existência dos quatro accordions de configurações e preservação dos IDs dos campos.
- Navegação do calendário por mês, atalho Hoje e seleção de datas.
- Existência das três regras de tratamento de feriado.
- Compatibilidade de dados antigos com `holidayTreatment` ausente, congelando a regra anterior nos snapshots das jornadas já existentes e aplicando `rest_extra` às novas jornadas.
- Nenhuma alteração destrutiva no modelo de registros ou no payload do Supabase.

## Testes manuais após publicação
1. Carregamento bem-sucedido: Salvo em verde.
2. Sincronização em andamento: Sincronizando em laranja.
3. Falha de rede ou gravação: Erro em vermelho.
4. Menu mobile: botão central legível e com área de toque suficiente.
5. Configurações: accordions independentes, sem perda de valores ao abrir/fechar.
6. Calendário: navegar para mês anterior, próximo e Hoje.
7. Feriado como folga: sem trabalho não gera adicional; trabalho registrado entra como extra com adicional de feriado.
8. Feriado seguindo a escala: dia previsto conta como jornada normal; folga trabalhada entra como feriado.
9. Feriado com adicional em qualquer dia: trabalho registrado recebe adicional de feriado.
10. Dados históricos e sincronização entre dispositivos preservados.

## Limite
A validação local não substitui o teste de gravação no Supabase publicado. A confirmação final de sincronização deve ser feita no ambiente real, usando a conta de teste e uma conta separada.
