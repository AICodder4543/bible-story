const CACHE_NAME = 'bible-story-v3';
const APP_SHELL = [
  'home.html',
  'index.html',
  'books-of-the-bible.html',
  'bible-explorers.html',
  'scripture-summary.html',
  'styles.css',
  'app.js',
  'data.js',
  'manifest.json',
  'logo-512.png',
  'icon-192.png',
  'favicon-32.png',
  'favicon-16.png',
  'apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// HTML pages and scripts change often as the site evolves (and their
// freshness directly affects things like sign-in state), so those go
// network-first with a cache fallback for when offline. Everything else
// (images, fonts, manifest) is cache-first since it rarely changes and
// benefits more from instant loading.
function isFreshnessCritical(url) {
  return url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname === '/' || url.pathname.endsWith('/');
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if (isFreshnessCritical(url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
