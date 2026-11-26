Meu Ponto v1.12.29.5 | HOMOLOGAÇÃO

Este pacote corrige a orientação e facilita o diagnóstico de uma falha de publicação do arquivo config.js.

IMPORTANTE: o ZIP NÃO contém o config.js real. O arquivo era externo ao pacote nas versões anteriores. Sem o config.js publicado em /meuponto/config.js, o login ONLINE não funciona. O pacote não tem como recriar sua URL e chave publicável do Supabase.

Passos seguros:
1. Faça backup dos arquivos existentes no GitHub Pages e de qualquer JSON local pendente.
2. Confirme que o config.js publicado continua na raiz do site, junto de index.html. Se estiver ausente, restaure a CÓPIA JÁ EXISTENTE desse arquivo. Não crie um novo projeto Supabase.
3. Publique os arquivos desta versão sem excluir config.js.
4. Abra verificar-publicacao.html e clique em Verificar arquivos. Essa página não imprime o conteúdo do config.js.
5. Somente depois teste login online e F5 offline; compare batidas em segundo navegador.

Nenhuma migração SQL, exclusão de registros ou importação de backups está incluída.
