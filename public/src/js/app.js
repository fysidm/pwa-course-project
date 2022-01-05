if ('serviceWorker' in navigator) {
  // Register service worker
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service worker registered!');
  });
}
