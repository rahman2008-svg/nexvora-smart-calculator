const cacheName = 'nexvora-calculator-v1';
const assetsToCache = [
  './index.html',
  './manifest.json',
  './service-worker.js',
  './style.css',   // যদি আলাদা CSS থাকে
  './script.js'    // যদি আলাদা JS থাকে
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
