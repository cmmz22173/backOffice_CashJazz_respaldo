importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

workbox.setConfig({
  debug: false
});

// se instala el service worker
self.addEventListener("install", function(event) {
  console.log("[SW] Install event");
  event.waitUntil(
    caches.open("my-cache").then(function(cache) {
      console.log("[SW] Caching important files");
      return cache.addAll(["/", "/index.html", "/favicon.ico"]);
    })
  );
});

//se activa el service worker
self.addEventListener("fetch", function(event) {
  console.log("[SW] Fetch event");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log("[SW] Serving from cache");
        return response;
      }
      console.log("[SW] Making a network request");
      return fetch(event.request);
    })
  );
});

