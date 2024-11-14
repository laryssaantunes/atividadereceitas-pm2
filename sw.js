let cacheName = "salvatore-pwa-v1";

let filesToCache = [
  "/",                         
  "/index",                
  "/css/style.css",                                 
  "/manifest.json",
  "/massas/carbonara",
  "/massas/macarrao",
  "/massas/farfalle",  
  "/carnes/hamburguinho-queijo",
  "/carnes/maracuja-mel",  
  "/carnes/mignon-suino", 
  "/doces/bolo-de-churros", 
  "/doces/bolo-de-laranja",  
  "/doces/sufle"
];

// Inicializando o Service Worker e fazendo o download do conteúdo da aplicação
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("Service Worker: Arquivos em cache");
      return cache.addAll(filesToCache);  // Adiciona todos os arquivos ao cache
    })
  );
});

// Disponibilizando o conteúdo quando estiver offline
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Se o arquivo estiver no cache, retorna do cache, caso contrário, busca na rede
      return response || fetch(e.request);
    })
  );
});
