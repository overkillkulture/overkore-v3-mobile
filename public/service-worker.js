self.addEventListener('install', event => {
  console.log('Overkore Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Overkore Service Worker activated.');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
