import { useContext } from 'react';

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ButtonUnderlined from 'components/ButtonUnderlined';
import LinkOutlined from 'components/LinkOutlined';
import Logo from 'components/Logo';
import routes from 'helpers/routes';
import { CityContext } from 'hooks/CityContext';

const Container = styled.nav`
  display: grid;
  grid-template: "commercial logo contact" 1fr / 1fr 1fr 1fr;
  margin: 1rem 0;

  ${({ theme }) => theme.media.tablet} {
    grid-template:
      "logo logo" 2fr
      "commercial contact" 1fr
      / 1fr 1fr;
    gap: 1rem;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template:
      "logo" 2fr
      "commercial" 1fr
      "contact" 1fr
      / 1fr;
  }
`;

const BlockStyles = css`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.media.mobile} {
    justify-content: space-between;
  }
`;

const CommercialBlock = styled.ul`
  ${BlockStyles}
  grid-area: commercial;
  justify-content: flex-start;
`;

const ContactBlock = styled.ul`
  ${BlockStyles}
  grid-area: contact;
  justify-content: flex-end;
`;

const LogoBlock = styled(Link)`
  grid-area: logo;
  margin: auto;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: filter 0.3s ease-in-out;

  :hover {
    filter: drop-shadow(0.2rem 0.2rem 0.2rem ${({ theme }) => theme.colors.primary});
  }
`;

interface HeaderProps {
  openCitySelect: () => void,
}

const Header = ({ openCitySelect }: HeaderProps): JSX.Element => {
  const { city } = useContext(CityContext);

  return (
    <Container>
      <CommercialBlock>
        <LinkOutlined route={routes.SHOP} text="Магазин" />
        <LinkOutlined route={routes.COMPANIES} text="Компаниям" />
        <LinkOutlined route={routes.ABOUT} text="О нас" />
      </CommercialBlock>
      <LogoBlock to={routes.HOME}>
        <Logo />
      </LogoBlock>
      <ContactBlock>
        <LinkOutlined route={routes.PLAYERS} text="Игроки" />
        <LinkOutlined route={routes.CONTACTS} text="Контакты" />
        <ButtonUnderlined text={city?.toUpperCase() || 'Выберите город'} onClick={openCitySelect} />
      </ContactBlock>
    </Container>
  );
};

export default Header;
