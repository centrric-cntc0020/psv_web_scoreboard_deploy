'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "930310bb8e8653e750552fe8cd469dc4",
"index.html": "591d699bd9bd14001b23d530216d6cea",
"/": "591d699bd9bd14001b23d530216d6cea",
"main.dart.js": "f7eb87a4636fe9455b5e9e8c0c933aa7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9eaf3d5cb8fd4c223771183a3db7085c",
".git/config": "6c41c054e994dc6db25cc0a6e3149253",
".git/objects/50/1e0d179982b5ebe739c77bb5663fe5133fe799": "85ee10df2425c123ecf76101d37990bb",
".git/objects/68/163f54c6660880a5322b9a0d8b5b33611bf28a": "7ab6fc06f184b5e9eb0f8ffd57a36f91",
".git/objects/68/95c38477ff115488bc30dafc8d11c6ed678da0": "607f1210930f8bdc4a7c28744acf6564",
".git/objects/68/066275e7107a170b7dffa1a40d3ea317d8ffd7": "ec402394a03a2f27571e63f1d9594748",
".git/objects/3b/272c68158d200dbb80d88e0bfc47dc87044de0": "e42187a43865e5364bf1adb075a84663",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/ea7066e30a08d2afab559b1a716598dd31fe77": "56d2849c475db4353a5e764dd614e16c",
".git/objects/69/39a374fb8c85a63b06d03b32a7fbedf25cb70a": "c29c3306c7db2125cb01eb1163e564f1",
".git/objects/51/d3c2f025623fabda498bd413f7444f44a273c3": "3cdeda1388836b6b18aecc1efac38c67",
".git/objects/60/a9834346bae5a5d275448f95e1cd897d258226": "d4a89f59afed3901f791da14431fe072",
".git/objects/5f/bcc4be87e90dd3ee07f70243e550312fbffb7e": "6ca26d890ea7afa751c520bd367b8e43",
".git/objects/02/2405f6b078ab6071a016c9fc689697513a1c30": "dc59562c70b3bcd569e166eb1d7fa63e",
".git/objects/d6/6f54148d3380d91549cf46a463ffacf9ca65e3": "8d6fbe8cf31138b543b74f0dae1e0e73",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/28ddfa4eddd16845c025714e8df9973c83d88f": "487d725ffce82edaf150fc94826e41cc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/4769554bd4aaad8e5892d4387709aabb89c477": "bf7811b8c3d9b8ac1d2d38610135a46a",
".git/objects/fc/28dfa30d64cb88baa6271831285b4805b76f7d": "0b042b2d479a409899f0589a0b476d51",
".git/objects/e3/f22aaacf59b5e07a82f8e747fe82432993159d": "5ba130542443f5c6bf013cc0aa4d66d4",
".git/objects/fe/a1afdfae35f895b4fe2eed13476510581fe4dc": "44a0c4d4c38b699fe498e73517dbbddf",
".git/objects/c1/634ae4dbec312ad9798e4e0ed085557cd3aec1": "8a55ac89002bc63fbb89dc1436fbbc94",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/a26ef1e032e36a70458f2794032499384becd7": "f7fa9cb658959cced731897839d600c7",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/92013b6c45cef075250db799e8a8cab86b9661": "6f58a598b49c4ca33abe29d36a8ba3bc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/81a8a08bdea610a3a7da0579418e6d127d57fa": "05d1577a84cdba0df960636976c7b212",
".git/objects/4c/5f651430308fd13aed29e3879cab09f5193d33": "877139fa58d7f36e44883d578a8280ca",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/81/67fb62653db208cc55abd270fe4d31ca002db4": "58d3fc843903dafce06f65cd9f6a9344",
".git/objects/86/d59f4fa65cd96c32030de2640270f0747734f4": "ef4cc11a959084c7ed14fd90965cc825",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ef14682f8043902f07fbbe0a033e30a0ec3392": "127154a79f860268c05984a41d2bd605",
".git/objects/53/5bb7fa9f54f2819d619b0aba1071d38c6c00c8": "3c82112fcf57293d8e96776f08e44304",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/b1746a01cf12a048f68cd22919d7bb36a52cb7": "9c8d10a70202beaea298481a7746c581",
".git/objects/5e/f3181c3969a6f8be15866a29be6e520c2d8b30": "3e471a50fde6961f6d43064bbaeea010",
".git/objects/5e/ddcc87b8c4a93a991b7f71d5afaebe4b73ddc7": "491e08ccf79729124de20c70e3ccde41",
".git/objects/01/ec92828aa42c1f00279fd4e3c737d064697dfe": "e6c597855c9f3ef804d918280a1c8df9",
".git/objects/6c/04ad429197ac71421ac693e430a1dd9de33ebf": "1effd2da41e47de5e38edfe48e5796c0",
".git/objects/52/6705adeebf4b6a2718ba37a324bcc255218c08": "b693daf7730306eb4fcbdde6154badda",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a7/b3e6a5dd9b017754fbaa0a711d8f6255278343": "b6a9edfb864d565dc467369d6e78edcc",
".git/objects/b8/f0cd3e0886e8c55bf83b5f895457f4b73e1b97": "d7618c7dcab7084b3a3485be5ec27efd",
".git/objects/b8/5f2a002965f77ed6ece11434704a4e4ad883d7": "e8812a40594f240a28732c0ad38ce619",
".git/objects/dd/adde0a75f7c656c7c6063a0737c5fc462a9af8": "4842c35bdc2c873fc56c2711a4182be4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/ff/764980ab29ebfe0f1df22f7c88621c0c3689d4": "ec2b96e48c9645a7bd9c990fba4cda13",
".git/objects/c5/82d8dd5511fe821ec9cee2b9926f7ba9c6c3b5": "a64096c0b47b5181a780114d2b3986b0",
".git/objects/e9/09369d034e54e5eb36505b8fd1877d0b669766": "5364eb60688c8c5ab9d4ef79b47b80c6",
".git/objects/f1/1664757ba32a97e13c27d0b427e2995d8a72de": "404e303222faca127a61be64f0049e17",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/34078822018c2fbda4ff3976510ba7e5afbf8c": "a5a80bf22868d99d4be1b56d6bc53093",
".git/objects/2c/a5dcf0fb2ad52c563d346f93a29e356982d861": "dd7be70fe6ba473363c4336a55a1b408",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/41877f9bc27b34f210404020e3ca63f0ba6f8c": "d1541dde8f1b3bec8f632e44714e4567",
".git/objects/8d/ef89b87415c4a74d134d44970e1186f7ceffba": "4c0cad222ba20a25fcc827b046d4d6b7",
".git/objects/82/8658f75c5b6600f739ba0a5ea43737697e8faf": "259493f59f724b4e23a32edd2c2a8218",
".git/objects/49/736cf34cb6d67783547d5ee7db88460778bf7f": "46cb2926120d3f9999c1ed76e270824b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8e/663076136de300558367420d102c576818578c": "5039e0c98ee467b61068b3007be825d2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "447d1d5192256ecf3bb6e69cfc88e61c",
".git/logs/refs/heads/main": "447d1d5192256ecf3bb6e69cfc88e61c",
".git/logs/refs/remotes/origin/main": "46063452864fcf99decb7085494d8d40",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fe8e9737208e91e9b5b53062a027c3ce",
".git/refs/remotes/origin/main": "fe8e9737208e91e9b5b53062a027c3ce",
".git/index": "cf8c675ed7f78f2515353dc004ada904",
".git/COMMIT_EDITMSG": "776ffe29120714cda1e30266440d997f",
"assets/AssetManifest.json": "1469a118ca62be19ecdafd122d54deb5",
"assets/NOTICES": "c1f6e9a3e4c1e5db0b14356de7b7ba2d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9317b7de046f228474e7892feed79e49",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/lottieout.json": "f6dd5979734da77423bf6ac187b87aeb",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
