import { CSSProperties, useEffect, useState, type JSX } from 'react';

import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';

import SponsorBackground from 'assets/images/banner-sponsor.webp';
import MainBackground from 'assets/images/neutral-rdga.webp';
import PlayersBackground from 'assets/images/players.webp';
import routes from 'helpers/routes';

import styles from './styles.module.css';

const bannerContent = new Map<string, Record<string, string>>([
  [
    routes.About,
    {
      image: PlayersBackground,
      text: 'Вступить в клуб РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Service,
    {
      image: SponsorBackground,
      text: 'Заказать мероприятие',
      link: routes.Contacts,
    },
  ],
  [
    routes.Players,
    {
      image: PlayersBackground,
      text: 'Вступить в клуб РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Calendar,
    {
      image: SponsorBackground,
      text: 'Вступить в клуб РДГА',
      link: `${routes.About}${routes.Join}`,
    },
  ],
  [
    routes.Partners,
    {
      image: SponsorBackground,
      text: 'Поддержать РДГА',
      link: 'https://www.tinkoff.ru/cf/9mJN821ed7D',
    },
  ],
]);

const defaultBannerContent = {
  image: MainBackground,
  text: 'Вступить в клуб РДГА',
  link: `${routes.About}${routes.Join}`,
};

const Banner = (): JSX.Element => {
  const location = useLocation();
  const [image, setImage] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    const currentBannerContent =
      bannerContent.get(location.pathname) || defaultBannerContent;
    setImage(currentBannerContent.image);
    setText(currentBannerContent.text);
    setLink(currentBannerContent.link);
  }, [location.pathname]);

  return (
    <div
      className={styles.banner}
      style={{ '--bg-image': `url(${image})` } as CSSProperties}
    >
      <HashLink
        className={styles.cta}
        to={link}
        smooth
        rel={link.startsWith('/') ? '' : 'noreferrer'}
        target={link.startsWith('/') ? '' : '_blank'}
      >
        {text}
      </HashLink>
    </div>
  );
};

export default Banner;
