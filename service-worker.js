"use strict";

const CACHE_PREFIX = "sidequest-manager-";
const CACHE_NAME = `${CACHE_PREFIX}36e7e0c19654c3ad`;
const APP_FILES = [
  "./",
  "./index.html",
  "./journey_catalog.js",
  "./journey-core.js",
  "./app.js",
  "./journey-planner.js"
];
const scopeRoot = new URL(self.registration.scope);
const appUrls = APP_FILES.map(path => new URL(path, scopeRoot).href);
const indexUrl = new URL("./index.html", scopeRoot).href;

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(appUrls);
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok) {
      try { await cache.put(request, response.clone()); } catch { }
    }
    return response;
  } catch {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === "navigate") {
      return (await cache.match(indexUrl)) || Response.error();
    }
    return Response.error();
  }
}

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== scopeRoot.origin || !url.pathname.startsWith(scopeRoot.pathname)) return;

  event.respondWith(networkFirst(request));
});
