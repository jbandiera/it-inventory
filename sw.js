// Minimal service worker so the app qualifies as an installable PWA.
// It passes requests straight through to the network (no offline caching),
// since the QR scan/generate libraries load from a CDN and camera scanning
// needs a live connection anyway.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Let the browser handle it normally.
});
