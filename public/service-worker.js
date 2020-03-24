//Daniel heeft me geholpen met cachen van html en css bestanden
cacheName = 'v3'
urlsToCache = [
    '/index.css',
    '/offline',
];

self.addEventListener('install', function(event) {
  console.log('activating!');
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .then(function(){
          self.skipWaiting();
      })
    );
  });

self.addEventListener('activate', function (event) {
    console.log('activating!');
    //verwijder alle cache namen die niet overeen komen met urlsToCache
    event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.keys().then(requests => {
					return Promise.all(
						requests.filter(request => {
							return !urlsToCache.includes(getPathName(request.url));
						}).map(cacheName => {
							return cache.delete(cacheName)
						})
					)
				}
			).then(() => self.clients.claim())
		})
	)
});

self.addEventListener('fetch', function(event){
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

/**
 * Get a pathname from a full URL by stripping off domain
 *
 * @param {Object} requestUrl        The request object, e.g. https://www.mydomain.com/index.css
 * @returns {String}                Relative url to the domain, e.g. index.css
 */
function getPathName(requestUrl) {
	const url = new URL(requestUrl);
	return url.pathname;
}