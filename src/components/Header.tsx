import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as PlayersSvg } from 'assets/icons/avatar.svg';
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import { ReactComponent as ContactsSvg } from 'assets/icons/contacts.svg';
import { ReactComponent as HomeSvg } from 'assets/icons/home.svg';
import { ReactComponent as InfoSvg } from 'assets/icons/info.svg';
import { ReactComponent as LocationSvg } from 'assets/icons/location-simple.svg';
import { ReactComponent as ShopSvg } from 'assets/icons/shop.svg';
import { ReactComponent as SponsorSvg } from 'assets/icons/sponsor.svg';
import ButtonUnderlined from 'components/ButtonUnderlined';
import CustomLink from 'components/CustomLink';
import HamburgerButton from 'components/HamburgerButton';
import Logo from 'components/Logo';
import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import routes from 'helpers/routes';
import { TownContext } from 'hooks/TownContext';
import useDialog from 'hooks/useDialog';

import TownSelectModal from './Dialogs/TownSelect';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: ${({ theme }) => theme.colors.primary};
  isolation: isolate;
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
  top: -0.5rem;
  left: 0;
  z-index: -1;
  width: min(15rem, 100vw);
  height: max-content;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 1rem 1rem;
  transition: clip-path 0.5s ease-in-out;
  clip-path: ${({ open }) =>
    open ? 'circle(120vh at 0 0)' : 'circle(0 at 2.25rem 2.25rem)'};
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

const UserContainer = styled.div`
  display: flex;
  grid-area: contact;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
`;

const LogoBlock = styled(Link)`
  position: relative;
  z-index: 1;
  grid-area: logo;
  margin: auto;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: scale 0.2s ease-in-out;

  :hover {
    scale: 1.1;
  }

  :active {
    scale: 0.9;
  }
`;

const links = [
  { route: routes.Home, text: 'На главную', svg: HomeSvg },
  { route: routes.Players, text: 'Игроки', svg: PlayersSvg },
  { route: routes.Calendar, text: 'Календарь', svg: CalendarSvg },
  { route: routes.About, text: 'О нас', svg: InfoSvg },
  { route: routes.Service, text: 'Услуги', svg: ShopSvg },
  { route: routes.Contacts, text: 'Контакты', svg: ContactsSvg },
  { route: routes.Partners, text: 'Наши партнеры', svg: SponsorSvg },
];

const adminLink = {
  route: routes.AdminHome,
  text: 'Админка',
  svg: InfoSvg,
};

const Header = (): JSX.Element => {
  const { town } = useContext(TownContext);
  const { roles } = useContext(AppSettingsContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    Dialog: TownDialog,
    openModal: openTownModal,
    closeModal: closeTownModal,
  } = useDialog({ headerText: 'Выберите город' });

  const linksToShow = [...links];

  if (roles.includes(Role.Admin)) {
    linksToShow.push(adminLink);
  }

  return (
    <Container>
      <Navigation>
        <NavigationContainer>
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
        <UserContainer>
          <ButtonUnderlined onClick={openTownModal}>
            {town?.toUpperCase() || 'Выберите город'}
            <LocationSvg width={20} />
          </ButtonUnderlined>
        </UserContainer>
      </Navigation>
      <TownDialog>
        <TownSelectModal onClose={closeTownModal} />
      </TownDialog>
    </Container>
  );
};

export default Header;
