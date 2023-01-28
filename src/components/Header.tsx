import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { ReactComponent as LocationSvg } from 'assets/icons/location-simple.svg';
import ButtonUnderlined from 'components/ButtonUnderlined';
import HamburgerButton from 'components/HamburgerButton';
import Logo from 'components/Logo';
import routes from 'helpers/routes';
import { TownContext } from 'hooks/TownContext';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-top: none;
  border-radius: 0 0 100vh 100vh;
  backdrop-filter: blur(15px);

  ${({ theme }) => theme.media.mobile} {
    border-radius: 0 0 3rem 3rem;
  }
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
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  transition: clip-path 0.5s ease-in-out;
  clip-path: ${({ open }) =>
    open ? 'circle(120vh at 0 0)' : 'circle(0 at 2.25rem 2.25rem)'};
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

const CustomLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  white-space: nowrap;
  text-decoration: none;
  transition: scale 0.2s ease-in-out, padding 0.2s ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: -1rem;
    width: 17px;
    height: 17px;
    translate: 0 -50%;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }

  :hover {
    padding-left: 2rem;
    scale: 1.1;

    svg {
      left: 0.5rem;
      opacity: 1;
      pointer-events: all;
    }
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { route: routes.HOME, text: 'На главную' },
    { route: routes.PLAYERS, text: 'Игроки' },
    { route: routes.CALENDAR, text: 'Календарь' },
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
                <CustomLink
                  key={link.route}
                  to={link.route}
                  onClick={() => setIsMenuOpen(false)}
                  title={link.text}
                >
                  <ArrowSvg />
                  {link.text}
                </CustomLink>
              ))}
            </LinksList>
          </NavigationBackground>
          <HamburgerButton
            open={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          />
        </NavigationContainer>
        <LogoBlock to={routes.HOME}>
          <Logo withoutImage textAlign='center' />
        </LogoBlock>
        <UserContainer>
          <ButtonUnderlined onClick={openTownSelect}>
            {town?.toUpperCase() || 'ВЫБЕРИТЕ ГОРОД'}
            <LocationSvg width={20} />
          </ButtonUnderlined>
        </UserContainer>
      </Navigation>
    </Container>
  );
};

export default Header;
