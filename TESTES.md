# Testes da v1.12.21

## Testes executados
- Sintaxe JavaScript: cinco scripts inline extraídos do index.html aprovados com `node --check`.
- Interface: painel e campos de contracheque presentes, sem IDs duplicados.
- Funções de conferência testadas em ambiente JavaScript isolado:
  - Conversão de `5.000,00` para 5000.
  - Registro do bruto, adiantamento de R$ 1.000 e pagamento final de R$ 3.500.
  - Total recebido de R$ 4.500 comparado ao líquido previsto de R$ 4.500, diferença zero.
  - Fechar, reabrir e excluir conferência.
- `version.json` validado, recursos do ZIP conferidos.

## Testes pendentes
- Teste visual em navegador com login e conta real.
- Sincronização entre dispositivos via Supabase.
- Conferência de cálculos reais com contracheques e acordo coletivo.
- Teste de situação offline e conflito real de sincronização.

As regras de cálculo existentes da v1.12.20 não foram editadas. Esta entrega adiciona conferência manual de pagamentos.
