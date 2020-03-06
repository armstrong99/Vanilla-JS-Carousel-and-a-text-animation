 const staticFiles = [
     '/Pages/index.html',
     '/Styles/main.css',
     '/Assets/Images/hair.jpg',
     'Pages/Network/p404.html',
     'Pages/Network/Offline.html'
 ]

 const statiCachName = ['sw_v8']

self.addEventListener('install',  event => {

        console.log('installing sw')
     event.waitUntil(
caches.open(statiCachName)
.then(cache => cache.addAll(staticFiles)
)
    )
})
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cachNames => {
            Promise.all(
                 cachNames.map(cacheName => {
                     if(statiCachName.indexOf(cacheName) === -1) {
                         return caches.delete(cacheName)
                     }
                 })
            )
        })
    )
})

self.addEventListener('fetch', event => {
     
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(res) {
                return res
            }
          else return  fetch(event.request)
            .then(res => {
                 if(res.status === 404) {

                  return caches.match('/Pages/Network/p404.html')

                } 

               else return caches.open(statiCachName)
                .then(cache => {
                cache.put(event.request.url, res.clone()); 
                 return res
                })
               

            }
            )
        })
        .catch(() => caches.match('Pages/Network/offline.html'))
    )
})