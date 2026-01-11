'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "90176934bd0aea20add9a7859296c0a3",
"assets/AssetManifest.bin.json": "f9f94aac951fbf292118a05b11bd7c56",
"assets/AssetManifest.json": "445b5489675fc0398402b3847dcb8493",
"assets/assets/graphql/mutation/add_play_chain.graphql": "d8ce5ca952a66f339d5c6f199ecbb0a1",
"assets/assets/graphql/mutation/add_public_chain.graphql": "93500c7d593fae6cc8e292138957676a",
"assets/assets/graphql/mutation/add_room_manager_chain.graphql": "c7fc690b6131ccb49866237da03667be",
"assets/assets/graphql/mutation/add_tournament_manager_chain.graphql": "ef0d0fd55085c24d291ff3076e2dca37",
"assets/assets/graphql/mutation/add_tournament_play_chain.graphql": "c318e9ed39fdb6d6180225f0372df080",
"assets/assets/graphql/mutation/add_tournament_public_chain.graphql": "820da61dcab2bf7e3b44b64c6075f332",
"assets/assets/graphql/mutation/bet.graphql": "1f017ddd35351e15b3d7fe4682c0864b",
"assets/assets/graphql/mutation/create_tournament.graphql": "df4b7b68db971802526402b2bba77941",
"assets/assets/graphql/mutation/deal_bet.graphql": "68c9a267ad9911363188740ebba7c436",
"assets/assets/graphql/mutation/exit_multi_player_game.graphql": "81555508c817d181fb55555c41b2842e",
"assets/assets/graphql/mutation/exit_play_chain.graphql": "7a275eee9085c1ff1bfe94906eabd824",
"assets/assets/graphql/mutation/exit_single_player_game.graphql": "23c59207380acafb5f6576c5547340f0",
"assets/assets/graphql/mutation/find_play_chain.graphql": "51e3743852c11741703ef2fc9ce1a76b",
"assets/assets/graphql/mutation/get_balance.graphql": "c8e238d74055205f33c05b22f54d7a21",
"assets/assets/graphql/mutation/hit.graphql": "6459452e04fce6b0619f0d1e1f8db196",
"assets/assets/graphql/mutation/initial_setup.graphql": "e9db725d1ad00cf6cdd817ce499012e6",
"assets/assets/graphql/mutation/open_room.graphql": "a6ce26233cb46f41b524f475a2c70ed7",
"assets/assets/graphql/mutation/request_join_room.graphql": "a4fa1fe83e8a548bfa774dfe9f16caf9",
"assets/assets/graphql/mutation/request_table_seat.graphql": "53c8bdd1a843ac847b0c14a47de60d3a",
"assets/assets/graphql/mutation/stand.graphql": "05ad2469898f929d082ba859d13a6a34",
"assets/assets/graphql/mutation/start_single_player_game.graphql": "3f6ab2c71de202b24f0fa1daf6897c11",
"assets/assets/graphql/mutation/subscribe_to.graphql": "e1fcf4a5722eb3e13aa9a920d1e18dc2",
"assets/assets/graphql/mutation/unsubscribe_from.graphql": "d35832d72a1c7990dcc8ed074d00a0e9",
"assets/assets/graphql/query/check_initial_setup.graphql": "469ba2b169ce4869f5811539e98248e8",
"assets/assets/graphql/query/get_balances.graphql": "c686097eda630f7911e7f501a69b88d5",
"assets/assets/graphql/query/get_profile.graphql": "4ce27b23bdf9225c30f732b61fbcee3b",
"assets/assets/graphql/query/get_public_chains.graphql": "e5395708b30317cba5e287bc9b07085f",
"assets/assets/graphql/query/get_room_leaderboard.graphql": "c248e847e8d6d64d0270e7c8771b0308",
"assets/assets/graphql/query/get_tournaments.graphql": "3b12f998a1ea418eaddc995bb0fd2f3e",
"assets/assets/graphql/query/get_tournament_leaderboard.graphql": "424940836df550ff1e25215df6152b22",
"assets/assets/graphql/query/get_tournament_public_chains.graphql": "91792eec5aa966a0f1954c7cce8ce3ce",
"assets/assets/graphql/query/get_user_status.graphql": "7c0ed754b4d33f1ba8beb80380bcfefe",
"assets/assets/graphql/query/health_check.graphql": "6eb684aff826fbc359d68186bd830ef9",
"assets/assets/graphql/query/master_chain_check.graphql": "0c9d4f82339136548dec46b23d6ea757",
"assets/assets/graphql/query/multi_player_data.graphql": "1c10158fb3f9b14bb2d216e4ba5bf4e0",
"assets/assets/graphql/query/single_player_data.graphql": "50f954142bf73ea7dc1e5e6170c9a941",
"assets/assets/graphql/query/tournament_player_data.graphql": "89492fdc384c7403e04a9b4957896b04",
"assets/assets/graphql/subscription/notification.graphql": "bc8ff1b5aa036465ec01cae73b885c12",
"assets/assets/old-graphql/mutation/action.graphql": "35213359bc29c55508733e448c961a06",
"assets/assets/old-graphql/mutation/idle_action_check.graphql": "f699efcf1b8eebcac753d9f06ce55b1a",
"assets/assets/old-graphql/mutation/join.graphql": "f238279cc98af6e0ca14f8c498b3ad0c",
"assets/assets/old-graphql/query/get_chain_list.graphql": "e4687c324fb1a64e9b5b506d3b0d7c9e",
"assets/assets/old-graphql/query/get_game_room_status.graphql": "0471564b9a77c6e42a9b0b840f177fc6",
"assets/assets/old-graphql/query/get_history.graphql": "b4b0985a12a0297a507c5e7fc9ddd1cc",
"assets/assets/old-graphql/query/get_insight.graphql": "7a02de56e9cc0359571f2dc04388d1c1",
"assets/assets/old-graphql/query/get_leaderboard.graphql": "a58e5a9d86522d059d7ff6c075327bca",
"assets/assets/old-graphql/query/get_player_status.graphql": "4729e5e01993767ea01d7ae1333f7925",
"assets/assets/old-graphql/query/get_play_data.graphql": "1f8fd59e77a396edf3362c5586d8e481",
"assets/assets/old-graphql/query/get_user_status.graphql": "b15cbc4e390dbcdabc191e0e1b4624fc",
"assets/assets/old-graphql/query/single_player_data.graphql": "0859a279535c78a064acdcfc35a858ed",
"assets/FontManifest.json": "15b0066e734841a5113c4e58769033b7",
"assets/fonts/MaterialIcons-Regular.otf": "a151526aa020c6b56660d42ff05d0b46",
"assets/NOTICES": "2abde4a147f806cb1aa42e8a708dddde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"config.json": "fb923d799b6660cd0902497c4ec67fdc",
"config.template.json": "25d0565127f03035f245fe546650f2cb",
"config_a.json": "d9ea41e476508d5916bcf4bbb9e90798",
"config_b.json": "be00a1cb50bf669c1c82ed5d0b7c8219",
"config_c.json": "400094229149356a14e282690b7b8d49",
"dist/ethers.js": "f83c0111bef9bacc6c639f4f0d508868",
"dist/index.d.ts": "4b4039c708c16ce995f451956db27e88",
"dist/index.js": "d5f8786e89b49e60d2e9800a74dbb36b",
"dist/index.js.map": "01f867ebacd4fc5511e40471a9e2d4f5",
"dist/signer/Composite.d.ts": "b7a96daa44d21cc808ef51370260e023",
"dist/signer/Composite.js": "de5b2bc23635811ab1989547bb28aaff",
"dist/signer/Composite.js.map": "254d3e52599e6d20f984e2a3d0105d34",
"dist/signer/index.d.ts": "a0ba7bad618b4512569aadf905df1023",
"dist/signer/index.js": "c75ddf5123d102906e43816adda35747",
"dist/signer/index.js.map": "9b2eb06db8aad74e354ab73f7ded3b02",
"dist/signer/PrivateKey.d.ts": "c179361bbabb09d1e079bd12b9128d0e",
"dist/signer/PrivateKey.js": "d94e617ebb8816b6c8b3b2aa6f203840",
"dist/signer/PrivateKey.js.map": "1ce10f65301d0d6deece68578cbd1e22",
"dist/wasm/index.d.ts": "56ec6a3cbee8a096ea1fbe726dfc4414",
"dist/wasm/index.js": "67e21e4ec224fbfe4678bebfdbdce1fd",
"dist/wasm/index_bg.wasm": "fd7ec1a8da929d4b58e759df815ac80c",
"dist/wasm/index_bg.wasm.d.ts": "610c0ce1d62c0a58458e799d919e76a7",
"dist/wasm/snippets/wasm-bindgen-futures-b6504891c854894f/src/task/worker.js": "01915d7931b9d835705b78a334d25955",
"dist/wasm/snippets/web-thread-4d290c67e66c22e5/src/Client.js": "f808bff302184729641a9cc381b65d1c",
"dist/wasm/snippets/web-thread-4d290c67e66c22e5/src/worker.js": "68193ab3502c306e5d8077c6c5a4f32e",
"favicon-16x16.png": "7cd1a2fcf05a42f87fca7d1a0c1e96af",
"favicon-32x32.png": "bcb010e34278987f98fdcd880cf08bb8",
"favicon.ico": "132f54fd80061359f9170721964d4071",
"favicon.png": "e5a0f7d71cdfd940705ba533ea03de11",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2b7df84798b2456284a2e06ea22248e2",
"fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"fonts/Orbitron-Bold.ttf": "446368d913de79c000895e4b91dfb1af",
"icons/Icon-192.png": "9d3f5bce811180345ddbc89b46a75d89",
"icons/Icon-512.png": "4e55809289afc7fcac1fcc79a50023c0",
"icons/Icon-maskable-192.png": "9d3f5bce811180345ddbc89b46a75d89",
"icons/Icon-maskable-512.png": "4e55809289afc7fcac1fcc79a50023c0",
"index.html": "e2c424493e1801c1b545e6009f1316db",
"/": "e2c424493e1801c1b545e6009f1316db",
"linera-wrapper.js": "915a535057fbcdea34bde85174e02c79",
"main.dart.js": "294bd8409df5eb6f5e321fbfe80ffe73",
"main.dart.mjs": "5d1bf4050b49b89c98fd5742bf7bde49",
"main.dart.wasm": "01592eae90346c94bb87faa60efd4d8e",
"manifest.json": "ff21955e07638e1632aa164a0ec03037",
"version.json": "03619a41fbe0213abf2c2940031ac018"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
