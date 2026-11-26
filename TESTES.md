# Testes v1.12.29.3

- [x] Sintaxe JavaScript (node --check)
- [x] Conciliação: batidas independentes (mescladas)
- [x] Conciliação: mesmo ID modificado em ambos (bloqueada)
- [x] Conciliação: exclusão local + inserção remota (preservadas)
- [x] Conciliação: mudanças independentes de configuração (mescladas)
- [x] Conciliação: diário anterior sem estado-base (bloqueado)
- [x] Integridade do pacote ZIP
- [ ] Login de homologação
- [ ] Offline, fechar navegador, reabrir e reconectar
- [ ] Duas sessões alterando batidas distintas
- [ ] Duas sessões alterando a mesma batida
- [ ] Recuperação de saída 26/11/2026 às 17h08
- [ ] Verificar Supabase com dispositivo independente

Observação: nenhuma mudança ou exclusão no banco foi executada durante a preparação deste pacote.


## v1.12.29.3: testes ainda necessários em navegador real

- [ ] Entrar online uma vez para gerar snapshot autenticado, desligar rede e atualizar F5.
- [ ] Batida feita offline sobrevive a F5 e a fechamento da aba.
- [ ] Reconectar, obter confirmação no Supabase e validar em segundo dispositivo.
- [ ] Alterar a mesma batida em dois navegadores, verificar painel de conflitos e escolher explicitamente.
- [ ] Conferir que nenhum registro remoto não conflitante desaparece.
- [ ] Confirmar que backup foi guardado antes de aplicar escolhas.
- [ ] Testar logout explícito, seguido de offline. A sessão offline não deve desbloquear.
- [ ] Validar que configuração e CDN ainda são necessários para primeiro login.
