//Daniel heeft me geholpen met cachen van html en css bestanden
cacheName = 'v3'
urlsToCache = [
    '/offline',
    'index.css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });

self.addEventListener('activate', function (event) {
    console.log('activating!');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event){

        // console.log('html get request', event.request.url)
        // event.respondWith(
        //     fetch(event.request).catch(function(e){
        //         return new Response('je bent offline!');
        //     })
        // )
        event.respondWith(
            caches
                .match(event.request)
                .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                    })
                .catch(function() {
                    return caches.match('/offline');
                })
        );
});