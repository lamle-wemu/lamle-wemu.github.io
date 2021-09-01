'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "df3b015a5104db1fc6c70fe039fbf6dd",
"index.html": "3e6deb3859433695ca3293a04f8a0b72",
"/": "3e6deb3859433695ca3293a04f8a0b72",
"main.dart.js": "314527637eaba52c5adc1178cae9992e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "40d48c1f2823327221ae72715cf075bc",
".git/config": "93402bd7810848bf4285db042a758a14",
".git/objects/95/7162a9ffb574c7d87291aa31e517a8532028b5": "8c9faed4910301cd0a30def1f3a97fe9",
".git/objects/9e/b765d411f99dca65fc38e6ab2145b74c800ae0": "edeeaccce545f8abc0e4842b368054a8",
".git/objects/04/d4fe842bcea437e57a324a30230e062c1b5d50": "072aa001459b2438c37059927eece912",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/05/02598a36f1dc86a13f4ad33cb1ae14498de5a4": "8cab555a866b2718b89bb905af455d74",
".git/objects/da/e5e8fc3ddef88f45050c98c97035aa0d4a9834": "fbeb8817cbb8ec82b41b92c81e4a2235",
".git/objects/a2/602961b7e732cba9818b6e6ea9e48741ba2e9e": "817fed89777538b8dba0ec28401f1732",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/7ad452c4a2dd50a2f55d0099c73afc04fdb1de": "4043a095e310338876253a49674673c2",
".git/objects/fd/caa3184249c18f8c7b19a81dd885efab59c9d1": "8c08ab871819f70880c2d1eef2b98deb",
".git/objects/f2/a1c2ba21471864405f53e68c01b22fc4cb6d44": "d6f1ff1d16b3172d02726cb1de03679a",
".git/objects/f2/07ebcdfa7d042b569a7854055bdf3121f877ab": "9c03021b54e3bc43516cc20b419d65dc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/80/b700907071f0b7d20370e258dcdeeb8379ebbf": "5496e7ae884a6b27902b683a70631e82",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8f/e19bd289d244f9ce7a51e1838790e199da91ed": "ff403d7c72d7c27dc8cbdbc00ae36ab2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/138d7991659512fd80013b58c94ef51b0f7a7d": "80a8bea03bb6bf5a9405c959801ca097",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/cf4da0c2dad4f938aa5813388060d3e5d8fa86": "b7e78941e24906c3c38c8b972dfe355e",
".git/objects/30/7d43cc87e37e25f21a9e358037988149e945e7": "0396155631ac62749527b9a25b73147e",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/6d/83c9de65996637e62f1c3c1eda8912703f5637": "8f52a4cbd52eeba379d6879c05416e3c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c3c029dff990e28151e15b7f316612ab308efe": "5b577e0e2af7099a8d2f332053cfb4ee",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/2f4d8afcd9c38a05de67b99ef502cd965439a8": "98049d8154d54bc72a1f4d82238c0edb",
".git/objects/a6/79dc3ae6e168f4a1804bd5afbd7d003d47cc8c": "143f18ea2e010ac4f6f61b467246dfe5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/9ffd5d2fd49231a42084373890ea7a7d2ffd80": "c1741259e533077db65fed65a936ee7d",
".git/objects/48/b0137b083733545b82977d5ecc5961c0ca46ff": "2748c1304f7027da573e5b847d3f6f08",
".git/objects/7a/8ddda36b3e3e544290f0d7da4db4583b9acc37": "e00965358e173b15f9c9f3e052e4b182",
".git/objects/25/02c3fd818e99ee7d85de0eec2f4d642a664130": "a642f57255d026b2d90cb4364a4eb36a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "846cab3ec67a8218c2e8cb5352d273fa",
".git/logs/refs/heads/master": "846cab3ec67a8218c2e8cb5352d273fa",
".git/logs/refs/remotes/origin/master": "8a94f2a96782b831d4d9bf6afa8ac8eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "122cb0fa31f8a9474d8f8d3519fe051b",
".git/refs/remotes/origin/master": "122cb0fa31f8a9474d8f8d3519fe051b",
".git/index": "a5cd96436fcb8a3eff62b36f50d386fd",
".git/COMMIT_EDITMSG": "4289bbdd6fba75013b317b2f9a540736",
"assets/AssetManifest.json": "96bb58b4e30749f25a1763053e34fe0c",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/av_jax.png": "f2a318fd90d0fd7a44f00b73d82d96ea",
"assets/assets/images/summoners_rift_map.jpeg": "8b0de66328a4297a434b3b2ba7a8680e",
"assets/assets/images/av_seraphine.png": "2794ccd03b0f3375ca3a044f7523b66f",
"assets/assets/images/ic_avatar_1.jpeg": "1f7bd52431ab02792aa52afcfd3930b4",
"assets/assets/images/av_sylas.png": "3612d6c1813e6eef1981620671fc224b",
"assets/assets/images/ic_time_pointer.png": "e5ac9bad87f027e059c8718f1af997e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
