const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/produk.html',
    '/kontak.html',
    '/style.css',
    '/app.js',
    '/gambar/logo.jpg',
    '/gambar/kanoman.jpg',
    '/gambar/mandalagm.jpg',
    '/gambar/petirarafah.jpg',
    '/gambar/sasukejetli.jpg',
    '/gambar/sugalialpha.jpg',
    '/gambar/Rtamu.jpg'
];

// Install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch resources from cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
