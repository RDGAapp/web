import { FormEventHandler, useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import PlayersSvg from 'assets/icons/avatar.svg?react';
import CrossSvg from 'assets/icons/cross.svg?react';
import LogoutSvg from 'assets/icons/logout.svg?react';
import TelegramSvg from 'assets/icons/telegram.svg?react';
import Avatar from 'components/Avatar';
import CustomLink, { CustomLinkStyles } from 'components/CustomLink';
import InlineLink from 'components/InlineLink';
import routes from 'helpers/routes';
import useDialog from 'hooks/useDialog';
import useMatchMedia from 'hooks/useMatchMedia';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { authorize, login, logout, register } from 'store/user/thunk';
import { ITelegram, ITelegramResponse } from 'types/telegram';

import styles from './styles.module.css';

const LogoutButton = styled.button<{ $imagePosition: 'right' }>`
  ${CustomLinkStyles}
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

declare global {
  interface Window {
    Telegram: ITelegram;
  }
}

const botId = import.meta.env.VITE_APP_TELEGRAM_BOT_ID ?? '';

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
    setTelegramData(null);
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

  if (loading || tgLoading) {
    return (
      <div className={styles['tg-container']}>
        <span className={styles['tg-loader']} />
      </div>
    );
  }

  return (
    <div
      className={styles['tg-container']}
      ref={containerRef}
      style={{ alignItems: 'flex-end' }}
    >
      {user ? (
        <>
          <div
            className={clsx(styles['tg-background'], { [styles.open]: open })}
          >
            <ul className={styles.links} style={{ alignItems: 'flex-end' }}>
              <CustomLink
                route={routes.MyProfile}
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
            </ul>
          </div>
          <button
            className={styles.avatar}
            onClick={() => setOpen((current) => !current)}
          >
            <CrossSvg style={{ opacity: open ? 1 : 0 }} />
            <Avatar
              style={{
                minHeight: '100%',
                minWidth: '100%',
                opacity: open ? 0 : 1,
              }}
              imageSrc={user.avatarUrl}
            />
          </button>
        </>
      ) : (
        <button
          className={styles['tg-button']}
          type='button'
          onClick={handleTelegramAuth}
        >
          <TelegramSvg style={{ width: '2.5rem' }} />
          {isMobile ? '' : 'Войти'}
        </button>
      )}
      <RegistrationDialog>
        <div className={styles.registration}>
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
        </div>
      </RegistrationDialog>
    </div>
  );
};

export default TelegramLogin;
