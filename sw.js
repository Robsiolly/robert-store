const CACHE_NAME = 'robert-store-v7';
const ASSETS = [
    './',
    './index.html',
    './canais.html',
    './style.css',
    './script.js',
    './manifest.json',
    './images/dragon_cannelone.png',
    './images/strawberry_elephant.png',
    './images/garama_madundung.png',
    './images/headless_horseman.png',
    './images/skibidi_toilet.png',
    './images/meowl.png',
    './images/fragama_chocrama.png',
    './images/cerberus.png',
    './images/la_ginger.png',
    './images/esok_sekolah.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
