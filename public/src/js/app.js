let deferredPrompt;

if ('serviceWorker' in navigator) {
  // Register service worker
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service worker registered!');
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt was fired');
  // Won't show the banner
  e.preventDefault();
  deferredPrompt = e;
  return false;
});
