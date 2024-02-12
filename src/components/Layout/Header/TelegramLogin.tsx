import { useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';
import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import { ReactComponent as TelegramSvg } from 'assets/icons/telegram.svg';
import Avatar from 'components/Avatar';
import useMatchMedia from 'hooks/useMatchMedia';
import { ITelegram, ITelegramResponse } from 'types/telegram';

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-right: 1rem;
`;

const Background = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: -1;
  top: -0.5rem;
  right: 0;

  width: min(15em, 100vw);
  height: max-content;

  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: ${({ open }) =>
    open
      ? 'circle(50vh at calc(100% - 2.25rem) 0)'
      : 'circle(0 at calc(100% - 2.25rem) 2.25rem)'};
  border-radius: 0 0 1rem 1rem;

  transition: clip-path 0.2s ease-in-out;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-end;

  margin-top: 4rem;
  margin-bottom: 0;
  padding: 0 1rem 1rem 1.5rem;

  @media (width < 554px) {
    margin-top: 5.1rem;
  }
`;

const AvatarContainer = styled.button`
  cursor: pointer;

  isolation: isolate;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  background: transparent;
  border: transparent;
  border-radius: 100%;

  transition: scale 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }

  & svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  & > * {
    position: absolute;
    transition: all 0.2s linear;
  }
`;

const Loader = styled.span`
  transform: translateZ(1px);
  display: inline-block;

  &::after {
    content: '';

    display: inline-block;

    width: 48px;
    height: 48px;
    margin: 8px;

    background: #fff;
    border-radius: 50%;

    animation: coin-flip 4.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes coin-flip {
    0% {
      transform: rotateY(0deg);
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }

    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }

    100% {
      transform: rotateY(3600deg);
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
  }
`;

const TelegramButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 0 1rem 0 0.5rem;

  color: ${({ theme }) => theme.colors.white};

  background: linear-gradient(90deg, hsl(201deg 76% 47%), hsl(198deg 75% 55%));
  border: transparent;
  border-radius: 100vh;

  transition: scale 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 0;
  }
`;

declare global {
  interface Window {
    Telegram: ITelegram;
  }
}

const botId = '6406095532';

const TelegramLogin = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<null | ITelegramResponse>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useMatchMedia();

  const handleTelegramAuth = () => {
    setLoading(true);
    window.Telegram.Login.auth(
      { bot_id: botId, request_access: 'write' },
      async (data: ITelegramResponse) => {
        if (!data) {
          setLoading(false);
          toast.error('Ошибка авторизации, повторите позже');
          return;
        }

        // TODO: send data to backend and set cookie there
        console.log(data);
        setUserData(data);
        setLoading(false);
      },
    );
  };

  // hide menu on outside click
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        !open ||
        !event.target ||
        containerRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container ref={containerRef}>
      {userData ? (
        <>
          <Background open={open}>
            <LinksList>
              <button type='button' onClick={() => setUserData(null)}>
                Выйти
              </button>
            </LinksList>
          </Background>
          <AvatarContainer onClick={() => setOpen((current) => !current)}>
            <CrossSvg style={{ opacity: open ? 1 : 0 }} />
            <Avatar
              style={{
                height: '100%',
                width: '100%',
                opacity: open ? 0 : 1,
              }}
              imageSrc={userData.photo_url}
            />
          </AvatarContainer>
        </>
      ) : (
        <TelegramButton type='button' onClick={handleTelegramAuth}>
          <TelegramSvg style={{ width: '2.5rem' }} />
          {isMobile ? '' : 'Войти'}
        </TelegramButton>
      )}
    </Container>
  );
};

export default TelegramLogin;
