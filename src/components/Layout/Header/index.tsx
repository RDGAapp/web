import { useContext, useEffect, useMemo, useRef, useState, type JSX } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
import TelegramLogin from './TelegramLogin';

const Container = styled.div`
  isolation: isolate;
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.header};
  top: 0;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.primary};
`;

const Navigation = styled.div`
  display: grid;
  grid-template: 'commercial logo contact' 1fr / 1fr 1fr 1fr;
  gap: 0.5rem;

  max-width: 67rem;
  margin: 0 auto;
  padding: 1rem;
`;

const NavigationContainer = styled.nav`
  position: relative;

  display: flex;
  grid-area: commercial;
  align-items: center;
  justify-content: flex-start;

  padding-left: 1rem;
`;

const NavigationBackground = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: -1;
  top: -0.5rem;
  left: 0;

  width: min(15rem, 100vw);
  height: max-content;
  border-radius: 0 0 1rem 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: ${({ open }) =>
    open ? 'circle(90vh at 0 0)' : 'circle(0 at 2.25rem 2.25rem)'};

  transition: clip-path 0.3s ease-in-out;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 4rem;
  margin-bottom: 0;
  padding: 0 1rem 1rem 1.5rem;

  @media (width < 554px) {
    margin-top: 5.1rem;
  }
`;

const LogoBlock = styled(Link)`
  position: relative;
  z-index: 1;

  grid-area: logo;

  margin: auto;

  text-decoration: none;

  transition: scale 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
`;

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
    <Container>
      <Navigation>
        <NavigationContainer ref={navigationRef}>
          <NavigationBackground open={isMenuOpen}>
            <LinksList>
              {linksToShow.map((link) => (
                <CustomLink
                  key={link.route}
                  route={link.route}
                  onClick={() => setIsMenuOpen(false)}
                  text={link.text}
                  CustomImage={link.svg}
                />
              ))}
            </LinksList>
          </NavigationBackground>
          <HamburgerButton
            open={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          />
        </NavigationContainer>
        <LogoBlock to={routes.Home}>
          <Logo withoutImage textAlign='center' />
        </LogoBlock>
        <TelegramLogin />
      </Navigation>
    </Container>
  );
};

export default Header;
