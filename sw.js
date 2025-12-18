/* ===============================
   POS APP SERVICE WORKER
   Versioned + Safe Update
   =============================== */

const CACHE_VERSION = 'v5'; // ⬅️ INCREASE THIS ON EVERY DEPLOY
const CACHE_NAME = `pos-app-cache-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

/* INSTALL */
self.addEventListener('install', event => {
  self.skipWaiting(); // activate immediately

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    })
  );
});

/* ACTIVATE */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

/* FETCH — NETWORK FIRST */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, copy);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

/* MESSAGE HANDLER */
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
