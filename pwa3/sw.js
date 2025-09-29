// sw.js
// sw.js
var cacheName = 'helloWorld';

self.addEventListener('install', event => {
    console.log("SW instalado");
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll([
            '/pwa3/hola.jpg',
            '/pwa3/lib1.js', '/pwa3/lib2.js', '/pwa3/unicorn.jpg', '/pwa3/utp.png',
            '/pwa3/index.html'
        ]))
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    if (/\.jpg$/.test(event.request.url)) {
        event.respondWith(fetch('unicorn.jpg'));
    } else if (/\.png$/.test(event.request.url)) {
        event.respondWith(fetch('utp.png'));
    } else {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
        );
    }
});