// The previous Gatsby site registered a service worker (gatsby-plugin-offline) at /sw.js.
// This replacement unregisters it and clears its caches so returning visitors get the new site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  const keys = await caches.keys();
  await Promise.all(keys.map((k) => caches.delete(k)));
  await self.registration.unregister();
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach((c) => c.navigate(c.url));
});
