
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('project').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/background.jpg'
        ]);
      })
    );
   });

   
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.open('project').then(function(cache){
        return cache.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      })
     
    );
   });