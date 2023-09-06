"use strict";
/**
 * Service Worker of PWA
 * To learn more and add one to your website, visit - https://PWA.com
 */

const cache_name = "pwa_chace_name";
const cache_list = ["pwa_cache_list"];
const cache_igno = ["pwa_chace_igno"];

// Install
self.addEventListener("install", function (e) {
  console.log("PWA service worker installation");
  e.waitUntil(
    setTimeout(() => {
      self.addEventListener("message", (event) => {
        caches.open(cache_name).then(function (cache) {
          console.log("PWA service worker caching dependencies");
          event.data.map(async function (url) {
            try {
              return await cache.add(url);
            } catch (reason) {}
          });
        });
      });
    }, 1000)
  );
});

//Activate and deleted old cached
self.addEventListener("activate", function (e) {
  console.log("PWA service worker activation");
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("PWA old cache removed", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch
self.addEventListener("fetch", function (e) {
  // Return if the current request url is in the never cache list
  if (!neverCacheUrls.every(checkNeverCacheList, e.request.url)) {
    console.log("PWA: Current request is excluded from cache.");
    return;
  }

  // Return if request url protocal isn't http or https
  if (!e.request.url.match(/^(http|https):\/\//i)) return;

  // Return if request url is from an external domain.
  if (new URL(e.request.url).origin !== location.origin) return;
  // For POST requests, do not use the cache. Serve offline page if offline.
  if (e.request.method !== "GET") {
    e.respondWith(
      fetch(e.request).catch(async function () {
        const res = await caches.match(e.request);
        return res;
      })
    );
    return;
  }

  // Revving strategy
  if (e.request.mode === "navigate" && navigator.onLine) {
    e.respondWith(
      fetch(e.request).then(async function (response) {
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());
        return response;
      })
    );
    return;
  }

  e.respondWith(
    caches
      .match(e.request)
      .then(function (response) {
        return (
          response ||
          fetch(e.request).then(async function (response) {
            const cache = await caches.open(cacheName);
            cache.put(e.request, response.clone());
            return response;
          })
        );
      })
      .catch(async function () {
        const res = await caches.match(e.request);
        return res;
      })
  );
});

// Check if current url is in the neverCacheUrls list
function checkNeverCacheList(url) {
  if (this.match(url)) {
    return false;
  }
  return true;
}

("tsc --target ESNext --module ESNext --outFile service-worker.js sw.ts");
