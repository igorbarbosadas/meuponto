# Meu Ponto v1.12.20

Revisão de cálculo: horas de feriado não são somadas novamente ao contador de horas extras quando pagas na rubrica de feriado. Jornada em feriado que segue escala compensada continua sem adicional de feriado. Para feriado previsto com adicional, a parcela normal já integra o salário-base e é lançado apenas o adicional sobre as horas regulares. Para trabalho em folga/feriado, o pagamento considera a hora trabalhada e o adicional, sem pagamento duplicado na rubrica de horas extras.

O detalhamento da jornada e da folha apresenta separadamente horas extras computadas e horas trabalhadas em feriado. A memória da folha também apresenta uma verificação interna de soma do bruto e líquido.

Não altera Supabase, dados salvos, escalas ou registros anteriores. Batidas existentes permanecem. A aplicação das regras ao histórico depende da configuração/snapshot de cada jornada. Valores continuam estimativas e dependem das regras coletivas.
