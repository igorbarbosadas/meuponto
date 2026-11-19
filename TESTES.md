# Meu Ponto v1.10.0 – validações

- Sintaxe dos quatro scripts embutidos aprovada pelo Node.js.
- Teste isolado das regras: semana 1, semana 2, sábado, folga e cobertura temporária.
- A regra de feriado por instante de trabalho já existia na v1.9.9. Agora há opção de configuração pela data de início da jornada.
- Sugestões nacionais de feriados são geradas localmente; SP e MA recebem sugestões estaduais verificadas. Para outras UFs, cadastro manual estadual nesta versão.
- Não foi possível executar o aplicativo no navegador de testes: acesso a localhost bloqueado.
- Não houve teste integrado com Supabase nem comparação com contracheque.

## Testes manuais necessários

1. Faça backup e entre na conta existente.
2. Configure as semanas 1 e 2 com data inicial em uma segunda-feira e veja o calendário da terceira semana.
3. Cadastre cobertura temporária e verifique o retorno ao rodízio.
4. Confira feriados nacionais e estaduais e confirme apenas os aplicáveis.
5. Simule 19/11 22:00 a 20/11 05:20, com intervalo, e confira o cálculo para os dois critérios de feriado.
6. Faça uma batida em outro dispositivo e confirme a sincronização.
