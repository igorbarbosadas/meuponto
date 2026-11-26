# Meu Ponto v1.12.29.3 (homologação)

Base exata: pacote v1.12.29.1_SEGURANCA.zip.

## Conciliação segura
- Diário local mantém o estado-base da revisão do Supabase quando nasce uma alteração pendente.
- Ao detectar alteração no servidor por outro dispositivo, a aplicação compara estado-base, cópia local e estado remoto.
- Batidas independentes (IDs distintos), alterações independentes em configurações, feriados e exceções podem ser mescladas.
- Mudanças incompatíveis no mesmo registro ou campo NÃO são sobrescritas. A fila continua no dispositivo, para exportação e conferência.
- Diários antigos sem estado-base NÃO são mesclados automaticamente. Exportar e reconciliar manualmente para proteger dados históricos.
- Atualizações sequenciais feitas durante envio preservam a versão local mais recente.
- O IndexedDB continua sendo espelho local e o Supabase continua sendo a fonte de registros confirmados.

## Publicação
VERSÃO DE HOMOLOGAÇÃO, não publicar em produção com alterações pendentes. Exportar backup completo do servidor e diário local antes de qualquer mudança. A sincronização real entre dispositivos precisa ser testada.
