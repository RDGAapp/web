import type { JSX } from 'react';

import Logo from 'components/Logo';
import useMatchMedia from 'hooks/useMatchMedia';

import styles from './styles.module.css';

const Footer = (): JSX.Element => {
  const { isDesktop } = useMatchMedia();
  return (
    <footer className={styles.footer}>
      <Logo big={isDesktop} />
      <div className={styles.copyright}>
        <p>© Федерация Флаинг Диска Свердловской области</p>
        <p>
          Наши соц сети:{' '}
          <a href='https://vk.com/discgolf' rel='noreferrer' target='_blank'>
            ВКонтакте
          </a>
          {', '}
          <a
            href='https://t.me/discgolf_russia'
            rel='noreferrer'
            target='_blank'
          >
            Telegram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
