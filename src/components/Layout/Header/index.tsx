import {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
} from 'react';

import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import PlayersSvg from 'assets/icons/avatar.svg?react';
import BlogSvg from 'assets/icons/blog.svg?react';
import CalendarSvg from 'assets/icons/calendar.svg?react';
import ContactsSvg from 'assets/icons/contacts.svg?react';
import HomeSvg from 'assets/icons/home.svg?react';
import InfoSvg from 'assets/icons/info.svg?react';
import ShopSvg from 'assets/icons/shop.svg?react';
import SponsorSvg from 'assets/icons/sponsor.svg?react';
import CustomLink from 'components/CustomLink';
import Logo from 'components/Logo';
import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import routes from 'helpers/routes';

import HamburgerButton from './HamburgerButton';
import styles from './styles.module.css';
import TelegramLogin from './TelegramLogin';

const links: Record<
  string,
  { route: string; text: string; svg: any; hidden?: boolean }
> = {
  [routes.Home]: { route: routes.Home, text: 'На главную', svg: HomeSvg },
  [routes.Blog]: { route: routes.Blog, text: 'Блог', svg: BlogSvg },
  [routes.Players]: { route: routes.Players, text: 'Игроки', svg: PlayersSvg },
  [routes.Calendar]: {
    route: routes.Calendar,
    text: 'Календарь',
    svg: CalendarSvg,
  },
  [routes.About]: { route: routes.About, text: 'О нас', svg: InfoSvg },
  [routes.Service]: { route: routes.Service, text: 'Услуги', svg: ShopSvg },
  [routes.Contacts]: {
    route: routes.Contacts,
    text: 'Контакты',
    svg: ContactsSvg,
  },
  [routes.Partners]: {
    route: routes.Partners,
    text: 'Наши партнеры',
    svg: SponsorSvg,
  },
  [routes.AdminHome]: {
    route: routes.AdminHome,
    text: 'Админка',
    svg: InfoSvg,
    hidden: true,
  },
};

const Header = (): JSX.Element => {
  const { roles } = useContext(AppSettingsContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationRef = useRef<HTMLDivElement>(null);

  // hide menu on outside click
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        !isMenuOpen ||
        !event.target ||
        navigationRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [isMenuOpen]);

  const linksToShow = useMemo(() => {
    if (roles.has(Role.Admin)) {
      links[routes.Blog].hidden = false;
      links[routes.AdminHome].hidden = false;
    }
    if (roles.has(Role.Author)) {
      links[routes.Blog].hidden = false;
      links[routes.AdminHome].hidden = false;
    }
    return Object.keys(links)
      .filter((key) => !links[key].hidden)
      .map((key) => links[key]);
  }, [roles]);

  return (
    <div className={styles.header}>
      <nav className={styles.navigation} ref={navigationRef}>
        <div className={clsx(styles.background, { [styles.open]: isMenuOpen })}>
          <ul className={styles.links}>
            {linksToShow.map((link) => (
              <CustomLink
                key={link.route}
                route={link.route}
                onClick={() => setIsMenuOpen(false)}
                text={link.text}
                CustomImage={link.svg}
              />
            ))}
          </ul>
        </div>
        <HamburgerButton
          open={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        />
      </nav>
      <Link className={styles.logo} to={routes.Home}>
        <Logo withoutImage textAlign='center' />
      </Link>
      <TelegramLogin />
    </div>
  );
};

export default Header;
