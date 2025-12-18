const CACHE = 'pos-v1';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll([
        './',
        './index.html',
        './manifest.json',
        './sale_192.png',
        './sale_512.png'
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
