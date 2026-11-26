# Meu Ponto v1.12.29

Base: v1.12.28.4. Atualização experimental de persistência local e sincronização.

- Diário persistente síncrono no localStorage, associado à conta, antes do envio ao Supabase.
- Cópia assíncrona adicional no IndexedDB.
- Restauração da fila após recarregar o navegador, mediante checagem de revisão no servidor.
- Múltiplas alterações locais podem ser enfileiradas sem bloquear o formulário.
- Reenvio com espera progressiva e verificação otimista de revisão.
- Conflitos de outro dispositivo não são mesclados automaticamente.

## LIMITAÇÕES IMPORTANTES
O aplicativo ainda envia um estado completo por conta e não faz mesclagem por registro. A fila local depende do armazenamento do navegador; não protege contra exclusão do armazenamento, modo anônimo ou perda física do dispositivo. A segurança em dois dispositivos simultâneos exige validação adicional. Antes de publicar, exporte backup da versão em uso e não instale enquanto houver envio pendente.
