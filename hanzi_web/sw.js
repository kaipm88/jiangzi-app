// JiangZi v2.0 Offline Service Worker (100% self-contained: CSS, HanziWriter, 1,015 Stroke JSONs & 149 Lessons)
const CACHE_NAME = 'jiangzi-mobile-v2.2.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './tailwind.min.css',
  './manifest.json',
  './vendor/hanzi-writer.min.js',
  './dict_extra.js',
  './lessons_data.js',
  './data/bank_radicals.js',
  './data/bank_hsk1.js',
  './data/bank_hsk2_9.js',
  './data/char_meta.js',
  './data/strokes_offline.js',
  './splash_bamboo_bg.jpg',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  const isCacheableRemote =
    url.hostname.includes('jsdelivr.net') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com');

  if (url.origin === self.location.origin || isCacheableRemote) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((res) => {
            if (res && (res.status === 200 || res.type === 'opaque')) {
              const clone = res.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
  }
});
