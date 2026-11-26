# Meu Ponto v1.12.28.3

## Alterações

- **Escala efetiva**: escolha horário fixo semanal ou semanas alternadas. A seleção abre o editor, sem sobrescrever configurações até salvar.
- **Cobertura opcional independente**: aparece em um bloco separado e não substitui o tipo de escala efetiva escolhido no seletor.
- **Tipo de cobertura**: horário fixo por período ou rodízio de 2 a 4 semanas.
- **Períodos**: início e término (opcional), inclusive datas passadas. Para rodízio, início precisa ser segunda-feira correspondente à semana 1.
- **Horários antigos**: use a própria cobertura com rodízio de semanas, sem uma seção separada de escalas históricas.
- **Compatibilidade**: registros `historicalShiftCycles` já existentes continuam sendo interpretados, sem limpeza automática de dados; novas coberturas são gravadas em `settings.coverages`.
- **Prioridade**: exceções de dia específico (trabalho/folga), cobertura cadastrada, escalas históricas legadas e escala efetiva.
- **Preservação**: batidas, histórico e salários dos registros não são apagados. Não requer migração SQL.

## Exemplo de cobertura em semanas alternadas

Semana 1: seg a sex 08:00–18:00 com intervalo de 60 min. Sábado e domingo de folga.
Semana 2: seg a sex 07:00–16:00 com intervalo de 60 min. Sábado 07:00–12:00 com intervalo de 0 min. Domingo de folga.

Informe segunda-feira de início da semana 1 e a data de fim do período. Salve a cobertura e confira o cálculo dos dias antigos em Relatórios.

## Instalação

Faça backup do conteúdo publicado. Envie os arquivos atualizados do ZIP, preservando `config.js` existente no servidor (não incluído). O navegador pode manter cache da versão anterior até carregar o novo Service Worker.

## Limitações

Validação local de sintaxe, estrutura e lógica de calendário não substitui testes com conta real no Supabase e com registros efetivos.

v1.12.28.3: tolerância configurável por marcação, atrasos brutos e após tolerância, sem desconto automático.

Atualização v1.12.28.3: consolidação sem duplicar formulários, cobertura independente e correção da identificação de escala.

## Correção v1.12.28.3
O cálculo anteriormente consultava `shiftCycle` do snapshot da batida, mesmo depois do usuário salvar uma escala retroativa. Agora os cálculos de jornadas, a auditoria e o acompanhamento de atrasos consultam o rodízio vigente cadastrado, mantendo regras financeiras do snapshot. Esta correção não altera registros existentes no servidor.

**Limitação conhecida:** nesta versão, o aplicativo ainda não dispõe de fila durável offline para novas batidas. Não considere alterações offline como persistidas. A próxima etapa deve implementar armazenamento local transacional e sincronização confirmada pelo Supabase.


## v1.12.28.4
- Campo adicional de domingo trabalhado (%) com valor padrão 100.
- Domingo iniciado como folga trabalhada é reconhecido sem exigir jornada planejada.
- Horas do domingo entram no total de extras e em rubrica própria de pagamento, sem somar novamente em extras comuns.
- Feriados continuam separados, com precedência sobre domingos.
- Sem alterações de schema no Supabase, IDs ou batidas.
- **Pendente:** fila local offline e teste de autenticação/sincronização real. Não publicar com sincronização pendente.
- A conferência por rubricas inclui campo adicional para domingos trabalhados.
