import { Workbox } from 'workbox-window';

export function register() {
  if (!('serviceWorker' in navigator)) return;

  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  const wb = new Workbox(swUrl);

  const showSkipWaitingPrompt = () => {
    const notification = document.getElementById('reloadNotification');
    if (!notification) return;
    notification.style.top = '1.5rem';
    notification.style.opacity = '1';
    notification.onclick = () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });

      wb.messageSkipWaiting();
    };
  };

  wb.addEventListener('waiting', showSkipWaitingPrompt);

  wb.register();
}

export function unregister() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.ready
    .then((registration) => {
      registration.unregister();
    })
    .catch((error) => {
      console.error(error.message);
    });
}
