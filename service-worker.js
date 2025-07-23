self,addEventListener('install', event => {
    event.waitUntil(
        caches.open('mi-pwa-cache').then(cache =>{
            return cache.addAll([
                '/',
                'index.html',
                'academico.html',
                'laboro.html'
            ]);
        })
    );
    console.log('Service Worker instalado');
});

self.addEventListener('fetch', event =>{
    event.repondWith(
        caches.match(event.request)
        .then(respuesta => respuesta || fetch(event.request))
    );
});