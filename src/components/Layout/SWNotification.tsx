import { useEffect } from 'react';

import { toast } from 'react-toastify';
import { useRegisterSW } from 'virtual:pwa-register/react';

const SWNotification = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  useEffect(() => {
    if (!needRefresh) return;

    toast.error('Доступна более новая версия сайта! Нажмите для обновления.', {
      onClick: () => {
        updateServiceWorker(true);
        setNeedRefresh(false);
      },
      autoClose: false,
      closeButton: false,
      closeOnClick: true,
      toastId: 'new-version',
    });
  }, [needRefresh]);

  return null;
};

export default SWNotification;
