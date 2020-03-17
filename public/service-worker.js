self.addEventListener('install', function (event) {
    console.log('installing');
    self.skipWaiting();
});

self.addEventListener('activate', function (event) {
    console.log('activating!');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event){

        console.log('html get request', event.request.url)
        event.respondWith(
            fetch(event.request).catch(function(e){
                return new Response('je bent offline!');
            })
        )
});

function isHtmlGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept'.indexOf('text/html') > -1));
}
