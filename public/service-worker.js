const CORE_CACHE_VERSION = 'v3'
const CORE_ASSETS = [
  '/offline',
]

self.addEventListener('install', function (event) {
    console.log('installing');
    event.waitUntil(
        caches.open(CORE_CACHE_VERSION)
            .then(function(cache){
                return cache.addAll(CORE_ASSETS)
                    .then(function(){
                        self.skipWaiting();
                    });
            })
    )
});

self.addEventListener('activate', function (event) {
    console.log('activating!');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event){
    if (isCoreGetRequest(event.request)) {
        console.log('Core get request: ', event.request.url);
        event.resondWith(
            caches.open(CORE_CACHE_VERSION)
                .then(function(cache){
                    cache.match(event.request.url)
                })
        )
    } else if (isHtmlGetRequest(event.request)) {
        console.log('html get request', event.request.url)

        event.respondWith(
            caches.open('html-cache')
                .then(function(cache) {
                    cache.match(event.request.url)
                })
                .then(function(res) {
                    res ? res : fetchAndCache(event.request, 'html-cache')
                })
                .catch(function(e) {
                    return caches.open(CORE_CACHE_VERSION)
                        .then(function(cache){
                            cache.match('/offline')
                        })
                })
        )
    }
});

// function isHtmlGetRequest(request) {
//     return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept'.indexOf('text/html') > -1));
// }

function fetchAndCache(request, cacheName) {
    return fetch(Request)
        .then(function(res){
            if(!res.ok) {
                throw new TypeError('Bad response status');
            }

        const clone = res.clone()
        caches.open(cacheName)
            .then(function(cache){
                cache.put(request, clone)
                return res
            })
        })
};

function isHtmlGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept').indexOf('text/html') > -1);
};

function isCoreGetRequest(request){
    return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
};

function getPathName(requestUrl) {
    const url = new URL (requestUrl);
    return url.pathname;
};
