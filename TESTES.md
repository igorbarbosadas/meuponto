# Plano de validação — Meu Ponto v1.9.6

Esta versão é uma candidata à versão estável. Não é a v2.0 final.

## Antes de atualizar

1. Confirme que não existem batidas pendentes de sincronização.
2. Exporte backup JSON da conta atual e guarde-o em local seguro.
3. Substitua index.html, version.json e sw.js. Preserve o config.js.

## Testes com a conta real

- Faça login em dois dispositivos e confira o mesmo histórico.
- Registre uma entrada, sincronize e confirme que ela aparece no outro dispositivo.
- Simule uma jornada com saída e compare o relatório com um cálculo manual.
- Sem internet, crie uma batida de teste e verifique que aparece como pendente.
- Reconecte e confira o envio antes de sair da conta.
- Confira correção de registro em outro dispositivo e exportação de backup.
- Teste aplicativo instalado no iPhone e Android e barra inferior sem sobreposição.
- Valide 22h às 5h20, 30/60/120 minutos extras, entrada antecipada, feriado e intervalo.

## Limites ainda não validados

- Integração Supabase real e diferenças entre dispositivos.
- Regra de remuneração de domingos, feriados e convenção coletiva.
- Comparação do líquido estimado com contracheque fechado.

Só classificar como v2.0 estável depois de completar os testes acima.

## Verificação automatizada executada nesta entrega

- Sintaxe dos quatro blocos JavaScript: aprovada.
- Integridade do ZIP: aprovada.
- Motor de cálculo testado no fuso `America/Sao_Paulo`: 6 cenários aprovados.
- Jornada contratual 22h–05h20 com 60 min de intervalo: 380 min efetivos e nenhuma extra.
- Prorrogações de 30, 60 e 120 min: crescimento progressivo das extras computadas.
- Entrada excepcional às 10h55: extras após o período estimado, sem adicional noturno indevido.
- Feriado cadastrado: adicional de feriado reconhecido.
- Teste visual automatizado: indisponível (navegador do ambiente bloqueou acesso ao servidor de testes local).
- Sincronização de ponta a ponta no Supabase do usuário: não executada.

**Importante:** A regra de pausa automática é aproximada. Os testes não homologam pagamento contra convenção coletiva nem contracheque.
