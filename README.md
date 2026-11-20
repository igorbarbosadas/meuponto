# Meu Ponto v1.12.8

- Corrigida a identificação interna da versão. O APP_VERSION estava em 1.11.8 embora a interface e o manifesto indicassem 1.12.7, fazendo o aviso de atualização reaparecer.
- O aviso agora também é ocultado quando version.json informa a mesma versão instalada.
- O painel Acompanhamento informa o enquadramento do último período trabalhado: jornada normal, hora extra, trabalho em feriado, hora extra em feriado, trabalho em folga ou hora extra em folga.
- Indicadores complementares para adicional noturno, feriado reconhecido, folga trabalhada, intervalo e horário fora do padrão.
- Exibe separadamente os adicionais acumulados na jornada aberta. A classificação do momento atual não usa apenas o total acumulado de horas extras.
- O cálculo usa as regras e o snapshot de escala/feriados vinculados à entrada. Nenhum registro ou dado do Supabase foi alterado.

## Publicação
Substitua index.html, sw.js e version.json. Preserve o config.js já existente, além dos arquivos de configuração do Supabase. Faça backup dos registros antes de publicar.
