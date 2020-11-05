importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.core.setCacheNameDetails({
        prefix: 'traffic-day',
        suffix: 'v1',
        precache: 'precache',
        runtime: 'run-time',
    });

    workbox.precaching.precacheAndRoute([]);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}