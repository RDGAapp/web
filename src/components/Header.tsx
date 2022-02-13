import styled from 'styled-components';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import LinkOutlined from 'components/LinkOutlined';
import HashLinkOutlined from 'components/HashLinkOutlined';
import ButtonUnderlined from 'components/ButtonUnderlined';
import routes from 'helpers/routes';
import useCity from 'helpers/useCity';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
          'commercial logo contact';
  margin: 20px;
  
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
            'logo logo'
            'commercial contact';
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas: 
            'logo'
            'commercial'
            'contact';
    gap: 30px;
  }
`;

const ButtonsCommercial = styled.div`
  grid-area: commercial;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: space-between;
  }
`;

const ButtonsContact = styled.div`
  grid-area: contact;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: space-between;
  }
`;

const LogoWrapper = styled(Link)`
  grid-area: logo;
  margin: auto;
  text-decoration: none;
  color: black;
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
