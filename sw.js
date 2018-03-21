self.addEventListener('install', function(event) {
	var urlsToCache = [
		'/',
		'css/styles.css',
		'js/dbhelper.js',
		'js/main.js',
		'data/restaurants.json',
		'img/1.jpg',
		'img/2.jpg',
		'img/3.jpg',
		'img/4.jpg',
		'img/5.jpg',
		'img/6.jpg',
		'img/7.jpg',
		'img/8.jpg',
		'img/9.jpg',
		'img/10.jpg'
	];

	event.waitUntil(
	   caches.open('restaurant-static').then(function(cache) {
	     return cache.addAll(urlsToCache);
	   })
	 );

	console.log(event);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});