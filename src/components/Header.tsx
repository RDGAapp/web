import styled from 'styled-components';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import LinkOutlined from 'components/LinkOutlined';
import HashLinkOutlined from 'components/HashLinkOutlined';
import ButtonUnderlined from 'components/ButtonUnderlined';
import routes from 'helpers/routes';
import useCity from 'helpers/useCity';

const Wrapper = styled.nav`
  display: grid;
  grid-template: "commercial logo contact" 1fr / 1fr 1fr 1fr;
  margin: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template:
      "logo logo" 2fr
      "commercial contact" 1fr
      / 1fr 1fr;
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template:
      "logo" 2fr
      "commercial" 1fr
      "contact" 1fr
      / 1fr;
    gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.mobilexs} {
    margin: 16px;
  }
`;

const ButtonsCommercial = styled.div`
  display: flex;
  grid-area: commercial;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;

  ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.mobilexs} {
    gap: 0;
  }
`;

const ButtonsContact = styled.div`
  display: flex;
  grid-area: contact;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: space-between;
  }
`;

const LogoWrapper = styled(Link)`
  grid-area: logo;
  margin: auto;
  color: black;
  text-decoration: none;
`;

interface HeaderProps {
  openCitySelect: () => void,
}

const Header = ({ openCitySelect }: HeaderProps): JSX.Element => {
  const city = useCity();
  return (
    <Wrapper>
      <ButtonsCommercial>
        <LinkOutlined route={routes.SHOP} text="Магазин" />
        <LinkOutlined route={routes.COMPANIES} text="Компаниям" />
        <LinkOutlined route={routes.SPONSORSHIP} text="Спонсорство" />
      </ButtonsCommercial>
      <LogoWrapper to={routes.HOME}>
        <Logo />
      </LogoWrapper>
      <ButtonsContact>
        <LinkOutlined route={routes.PLAYERS} text="Игроки" />
        <HashLinkOutlined route={routes.CONTACTS} text="Контакты" />
        <ButtonUnderlined text={city?.toUpperCase() || 'Выберите город'} onClick={openCitySelect} />
      </ButtonsContact>
    </Wrapper>
  );
};

export default Header;
