import { CSSProperties } from 'react';

import styled from 'styled-components';
import { useRegisterSW } from 'virtual:pwa-register/react';

const Container = styled.div`
  cursor: pointer;

  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.swNotification};
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  max-width: 80vw;
  padding: 0.5rem 1.5rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  opacity: 0;
  background-color: ${({ theme }) => theme.colors.additional};
  border-radius: 2rem;

  transition: all 1s ease-in-out;
`;

const showStyles: CSSProperties = {
  top: '1.5rem',
  opacity: 1,
};

const SWNotification = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  return (
    <Container
      id='reloadNotification'
      style={needRefresh ? showStyles : {}}
      onClick={
        needRefresh
          ? () => {
              updateServiceWorker(true);
              setNeedRefresh(false);
            }
          : undefined
      }
    >
      Доступна более новая версия сайта! Нажмите для обновления.
    </Container>
  );
};

export default SWNotification;
