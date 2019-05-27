importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/42a7e893d4291b7284df.js",
    "revision": "9c0828e0a2217e01bb4a62535accc37c"
  },
  {
    "url": "/_nuxt/cc0840efeb2f05d2547c.js",
    "revision": "1b7cd036fc24d39f04ea9c9b9499c359"
  },
  {
    "url": "/_nuxt/e1d3d464a0fb335d978c.js",
    "revision": "f050b167736d9b79ba544c9fa0fa297f"
  },
  {
    "url": "/_nuxt/e739414267e66700437f.js",
    "revision": "e817b34b5c59791396ba8515f872bd8c"
  },
  {
    "url": "/_nuxt/eb97beb6a4b630051d2e.js",
    "revision": "103012d2d070866a1673cc0fd16e6d97"
  },
  {
    "url": "/_nuxt/ec82133122eda085c772.js",
    "revision": "b507fb6b45bc1dff5b03a50eb58fbe79"
  }
], {
  "cacheId": "nuxt-learn",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
