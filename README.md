# Meu Ponto v1.12.11

## Alterações desta versão
- Estados visuais de sincronização reduzidos a Salvo (verde), Sincronizando (laranja) e Erro (vermelho). A leitura e a gravação remotas também exibem Sincronizando durante a operação.
- Botão central de batida no menu mobile com área de toque maior, ícone mais visível e rótulos curtos: Entrada, Intervalo, Retorno e Saída. O nome completo permanece no leitor de tela.
- Salário e regras de cálculo divididos em seções expansíveis independentes: Salário e adicionais, Regras da jornada, Fechamento da folha e pagamento, e Descontos e outros custos. O botão Salvar salário e regras também grava os horários e o intervalo previstos.
- Calendário com navegação anterior/próximo mês, atalho Hoje, nome do mês em destaque e diferenciação visual do dia atual.
- Novo tratamento de feriados: (1) feriado é folga e, se houver trabalho, as horas entram como extra com adicional de feriado; (2) segue a escala e, quando houver trabalho previsto, conta como jornada normal; (3) segue a escala, mas todo trabalho em feriado recebe adicional.
- O padrão para contas existentes sem a nova preferência passa a ser feriado como folga, com adicional quando houver trabalho. A preferência pode ser alterada em Ajustes > Feriados.
- Para preservar cálculos anteriores, jornadas já registradas sem a nova regra recebem uma cópia da configuração antiga (`legacy`) no snapshot de cálculo. Novas jornadas usam a preferência atual. A migração é enviada ao Supabase junto da próxima gravação, sem apagar batidas.
- No painel inicial, feriado e situação da escala aparecem em um único indicador, evitando duplicação.

## Segurança e preservação
- Nenhum registro, batida, histórico, conta ou dado do Supabase foi apagado ou migrado.
- Os novos campos são compatíveis com configurações antigas. A ausência de `holidayTreatment` é interpretada como `rest_extra`.
- Mantida a política de não sobrescrever registros locais ou remotos durante falhas de conexão.
- Service worker atualizado com novo identificador de cache. Não limpa dados de autenticação nem dados do Supabase.

## Testes recomendados após publicar
1. Confirmar que o topo mostra Salvo em verde após carregar os dados.
2. Editar uma configuração e confirmar Sincronizando em laranja, seguido de Salvo em verde.
3. Desconectar a rede, tentar salvar e confirmar Erro em vermelho.
4. Conferir o menu mobile em largura de 320 px, 390 px e 430 px.
5. Abrir e fechar cada accordion de configurações e salvar salário, regras e folha.
6. Navegar entre meses no calendário e selecionar dias com batidas e feriados.
7. Testar os três tratamentos de feriado em uma data cadastrada, conferindo jornada normal, hora extra e adicional.
8. Entrar em outra conta e confirmar que dados, configurações e feriados continuam isolados por usuário.
9. Confirmar que as batidas e os cálculos anteriores permanecem disponíveis.

## Publicação
Substitua `index.html`, `sw.js` e `version.json`. Preserve `config.js`, `admin.html`, `manifest.webmanifest`, as Edge Functions e as configurações do Supabase. O ZIP completo contém a estrutura do aplicativo, mas não inclui a chave de configuração pública do seu projeto.
