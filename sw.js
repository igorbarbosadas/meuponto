/* Meu Ponto v1.12.28.4 — escopo exclusivo deste aplicativo. */
const VERSION='1.12.28.4';
const SHELL='meuponto-shell-'+VERSION+'-payroll-r10';
const PUBLIC='meuponto-public-'+VERSION+'-payroll-r10';
const APP_FILES=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(APP_FILES)));
 // Não ativar à força durante uma jornada em andamento.
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('meuponto-')&&k!==SHELL&&k!==PUBLIC).map(k=>caches.delete(k)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 // Nunca guardar chamadas autenticadas, banco, sessões ou respostas de APIs.
 if(url.hostname.endsWith('.supabase.co')||url.pathname.includes('/auth/v1/')||url.pathname.includes('/rest/v1/'))return;
 // Biblioteca pública: versão entregue pela CDN previamente carregada, para reabertura offline.
 if(url.origin!==self.location.origin){
  if(url.hostname==='cdn.jsdelivr.net'&&url.pathname.includes('/@supabase/supabase-js@2/dist/umd/supabase.js')){
   event.respondWith((async()=>{
    const cache=await caches.open(PUBLIC);
    try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}
    catch(err){const saved=await cache.match(req);if(saved)return saved;throw err}
   })());
  }
  return;
 }
 const scope=new URL(self.registration.scope);
 if(!url.pathname.startsWith(scope.pathname))return;
 // Painel administrativo: nunca armazenar respostas HTML no service worker.
 if(url.pathname.endsWith('/admin.html'))return;
 // Consultas de versão sempre pela rede; offline, não exibir atualização incorreta.
 if(url.pathname.endsWith('/version.json'))return;
 // config.js contém apenas valores PUBLICÁVEIS. Rede primeiro; cópia offline apenas para reabrir a interface.
 if(url.pathname.endsWith('/config.js')){
  event.respondWith((async()=>{
   const cache=await caches.open(PUBLIC);
   try{const response=await fetch(req,{cache:'no-store'});
    if(response.ok)await cache.put(new Request(new URL('./config.js',scope)),response.clone());return response}
   catch(err){const saved=await cache.match(new URL('./config.js',scope).href);if(saved)return saved;throw err}
  })());return;
 }
 if(req.mode==='navigate'||url.pathname===scope.pathname+'index.html'||url.pathname===scope.pathname){
  event.respondWith((async()=>{
   try{const response=await fetch(req,{cache:'no-store'});
    if(response.ok) {const cache=await caches.open(SHELL);await cache.put(new URL('./index.html',scope).href,response.clone())}
    return response;
   }catch(err){const saved=await caches.match(new URL('./index.html',scope).href);if(saved)return saved;throw err}
  })());return;
 }
 // Imagens e manifesto do aplicativo: cache local do pacote atual.
 if(APP_FILES.some(p=>new URL(p,scope).pathname===url.pathname)){
  event.respondWith(caches.match(req,{ignoreSearch:true}).then(saved=>saved||fetch(req)));
 }
});
