import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LocationSvg } from 'assets/icons/location-simple.svg';
import ButtonUnderlined from 'components/ButtonUnderlined';
import HamburgerButton from 'components/HamburgerButton';
import LinkOutlined from 'components/LinkOutlined';
import Logo from 'components/Logo';
import routes from 'helpers/routes';
import { TownContext } from 'hooks/TownContext';
import useMatchMedia from 'hooks/useMatchMedia';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(15px);
`;

const Navigation = styled.div`
  display: grid;
  grid-template: 'commercial logo contact' 1fr / 1fr 1fr 1fr;
  gap: 0.5rem;
  max-width: 67rem;
  margin: 0 auto;
  padding: 1rem 0 0;
`;

const NavigationContainer = styled.nav`
  position: relative;
  display: flex;
  grid-area: commercial;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  isolation: isolate;
`;

const NavigationBackground = styled.div<{ open: boolean }>`
  position: absolute;
  top: -1rem;
  left: 0;
  z-index: -1;
  width: min(15rem, 100vw);
  height: max-content;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 0 1px black;
  transition: clip-path 0.5s ease-in-out;
  clip-path: ${({ open }) =>
    open
      ? 'circle(120vh at 0 0)'
      : 'circle(1.25rem at 2.25rem 2.25rem)'};
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 60px;
  padding: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  grid-area: contact;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
`;

const LogoBlock = styled(Link)`
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

interface HeaderProps {
  openTownSelect: () => void;
}

const Header = ({ openTownSelect }: HeaderProps): JSX.Element => {
  const { town } = useContext(TownContext);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { route: routes.HOME, text: 'На главную' },
    { route: routes.PLAYERS, text: 'Игроки' },
    { route: routes.CALENDAR, text: 'Календарь турниров' },
    { route: routes.ABOUT, text: 'О нас' },
    { route: routes.SERVICE, text: 'Услуги' },
    { route: routes.CONTACTS, text: 'Контакты' },
  ];

  return (
    <Container>
      <Navigation>
        <NavigationContainer>
          <NavigationBackground open={isMenuOpen}>
            <LinksList>
              {links.map((link) => (
                <LinkOutlined
                  key={link.route}
                  route={link.route}
                  text={link.text}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </LinksList>
          </NavigationBackground>
          <HamburgerButton
            open={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          />
        </NavigationContainer>
        <LogoBlock to={routes.HOME}>
          <Logo
            withoutImage={isTablet || isDesktop}
            withoutText={isMobile}
            textAlign='center'
          />
        </LogoBlock>
        <UserContainer>
          <ButtonUnderlined onClick={openTownSelect}>
            {town?.toUpperCase() || 'ВЫБЕРИТЕ ГОРОД'}
            <LocationSvg width={20} />
          </ButtonUnderlined>
        </UserContainer>
      </Navigation>
      <div style={{ overflow: 'hidden', background: 'white', display: 'flex' }}>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{ fill: '#fbcd04', width: '259%', height: 40 }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>
    </Container>
  );
};

export default Header;
