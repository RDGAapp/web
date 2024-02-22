import {
  FormEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { toast } from 'react-toastify';
import styled from 'styled-components';

import { ReactComponent as PlayersSvg } from 'assets/icons/avatar.svg';
import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import { ReactComponent as LogoutSvg } from 'assets/icons/logout.svg';
import { ReactComponent as TelegramSvg } from 'assets/icons/telegram.svg';
import Avatar from 'components/Avatar';
import CustomLink, { CustomLinkStyles } from 'components/CustomLink';
import InlineLink from 'components/InlineLink';
import { AppSettingsContext } from 'context/AppSettings';
import routes from 'helpers/routes';
import useDialog from 'hooks/useDialog';
import useMatchMedia from 'hooks/useMatchMedia';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { login, logout, register, authorize } from 'store/user/thunk';
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
  display: flex;

  &::after {
    content: '';

    display: inline-block;

    width: 2.5rem;
    height: 2.5rem;

    line-height: 1;

    background: linear-gradient(
      90deg,
      hsl(201deg 76% 47%),
      hsl(198deg 75% 55%)
    );
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

const RegistrationInfoContainer = styled.div`
  display: grid;
  gap: 0.5rem;

  width: 100%;
  max-width: 25rem;
  margin: auto;

  & input {
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    border-radius: 2rem;
  }

  & button {
    cursor: pointer;

    width: max-content;
    margin: auto;
    padding: 0.5rem 1rem;

    background-color: ${({ theme }) => theme.colors.lighterBackground};
    border: none;
    border-radius: 2rem;

    transition: all 0.3s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      background-color: transparent;
      filter: contrast(0.2);
    }

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  & form {
    display: grid;
    gap: 0.5rem;
  }

  ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }
`;

const LogoutButton = styled.button<{ $imagePosition: 'right' }>`
  ${CustomLinkStyles}
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

declare global {
  interface Window {
    Telegram: ITelegram;
  }
}

const botId = process.env.REACT_APP_TELEGRAM_BOT_ID ?? '';

const TelegramLogin = () => {
  const dispatch = useAppDispatch();

  const { user, loading, registering } = useAppSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [tgLoading, setTgLoading] = useState(false);
  const [telegramData, setTelegramData] = useState<null | ITelegramResponse>(
    null,
  );
  const [rdgaNumber, setRdgaNumber] = useState<string>('');

  const containerRef = useRef<HTMLDivElement>(null);

  const { featureFlags } = useContext(AppSettingsContext);

  const { isMobile } = useMatchMedia();

  const {
    Dialog: RegistrationDialog,
    openModal: openRegistrationModal,
    closeModal: closeRegistrationModal,
  } = useDialog({
    headerText: 'Необходима регистрация',
    onClose: () => setTelegramData(null),
  });

  const handleTelegramAuth = () => {
    setTgLoading(true);
    window.Telegram.Login.auth(
      { bot_id: botId, request_access: 'write' },
      async (data: ITelegramResponse) => {
        setTgLoading(false);

        if (!data) {
          toast.error('Ошибка телеграмма, повторите позже');
          return;
        }

        await dispatch(
          login({
            telegramData: data,
            callback: () => setTelegramData(data),
          }),
        );
      },
    );
  };

  useEffect(() => {
    dispatch(authorize());
  }, []);

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

  useEffect(() => {
    if (user || !telegramData) return;

    openRegistrationModal();
  }, [user, telegramData]);

  const logoutFn = async () => {
    setOpen(false);
    dispatch(logout());
  };

  const registerFn: FormEventHandler = async (event) => {
    event.preventDefault();

    if (!telegramData) return;

    dispatch(
      register({
        rdgaNumber: Number(rdgaNumber),
        telegramData,
        callback: closeRegistrationModal,
      }),
    );
  };

  if (!featureFlags.telegramLogin) {
    return <Container />;
  }

  if (loading || tgLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container ref={containerRef}>
      {user ? (
        <>
          <Background open={open}>
            <LinksList>
              <CustomLink
                route={`${routes.Players}/${user.rdgaNumber}`}
                text='Профиль'
                imagePosition='right'
                CustomImage={PlayersSvg}
                onClick={() => setOpen(false)}
              />
              <LogoutButton
                type='button'
                onClick={logoutFn}
                $imagePosition='right'
              >
                <LogoutSvg />
                Выйти
              </LogoutButton>
            </LinksList>
          </Background>
          <AvatarContainer onClick={() => setOpen((current) => !current)}>
            <CrossSvg style={{ opacity: open ? 1 : 0 }} />
            <Avatar
              style={{
                minHeight: '100%',
                minWidth: '100%',
                opacity: open ? 0 : 1,
              }}
              imageSrc={user.avatarUrl}
            />
          </AvatarContainer>
        </>
      ) : (
        <TelegramButton type='button' onClick={handleTelegramAuth}>
          <TelegramSvg style={{ width: '2.5rem' }} />
          {isMobile ? '' : 'Войти'}
        </TelegramButton>
      )}
      <RegistrationDialog>
        <RegistrationInfoContainer>
          <p>В нашей системе нет записи с таким пользователем Telegram.</p>
          <p>
            Если еще не оформил членство, то можешь это сделать по{' '}
            <InlineLink
              route={`${routes.About}${routes.Join}`}
              text='данной ссылке'
              onClick={closeRegistrationModal}
            />
          </p>
          <p>
            Если уже оформлял членство и карточка игрока видна на сайте, введи
            свой номер РДГА ниже:
          </p>
          <form onSubmit={registerFn}>
            <input
              type='number'
              placeholder='Номер РДГА'
              min={1}
              value={rdgaNumber}
              onChange={(e) => setRdgaNumber(e.target.value)}
            />
            <button type='submit' disabled={!rdgaNumber || registering}>
              Связать
            </button>
          </form>
        </RegistrationInfoContainer>
      </RegistrationDialog>
    </Container>
  );
};

export default TelegramLogin;
