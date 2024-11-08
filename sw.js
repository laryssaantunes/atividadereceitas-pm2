
let cacheName = "salvatores-pwa-v1";

let filesToCache = [
  "/",                         
  "/index.html",                
  "/css/style.css",             
  "/app.js",                     
  "/manifest.json",                 
  "/mediaespaguete-a-carbonara-350x200-c.jpg",  
  "/mediabolo-de-churros-350x200-c.jpg",
  "/mediamacarrao-gratinado-com-cheddar-e-bacon-350x200-c.jpg",
  "/media20210706_sufle_de_chocolate_com_calda_de_chocolate_master-350x200-c.jpg",
  "/mediafile-mignon-suino-champignons-creme-mostarda-350x200-c.jpg",
  "/mediafile-suino-ao-molho-de-maracuja-laranja-e-mel-350x200-c.jpg"
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
