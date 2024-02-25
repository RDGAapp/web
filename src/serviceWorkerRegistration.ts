import { Workbox } from 'workbox-window';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ),
);

export function register() {
  if (isLocalhost || !('serviceWorker' in navigator)) return;

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
      notification.style.top = '-10rem';
      notification.style.opacity = '0';
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
