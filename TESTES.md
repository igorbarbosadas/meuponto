# Testes da v1.12.29

## Verificações estáticas
- Sintaxe dos scripts JS
- Identificação consistente da versão
- Integridade do ZIP
- Preservação dos componentes de escalas e domingos

## Testes ainda necessários em navegador real
1. Salvar batida online e verificar status Salvo após confirmação.
2. Desligar internet, registrar duas batidas, fechar/reabrir, e conferir preservação.
3. Reconectar e conferir dados após atualização da página.
4. Simular conflito de dois dispositivos e verificar se nenhum registro é sobrescrito.
5. Testar IndexedDB indisponível/localStorage cheio, login offline e falha de autenticação.

Não publicar como atualização validada sem executar os testes de integração com conta de homologação.


v1.12.29.1: limpeza seletiva de backups históricos com exportação prévia. NUNCA limpa fila offline. Conflito entre dispositivos exige conferência; reconciliação automática não implementada.
