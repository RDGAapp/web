import styled from 'styled-components';
import Logo from 'components/Logo';
import ButtonOutlined from './ButtonOutlined';
import ButtonUnderlined from './ButtonUnderlined';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
          'commercial logo contact';
  margin: 25px 20px;
  
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

const LogoWrapper = styled.div`
  grid-area: logo;
`;

const Header = (): JSX.Element => (
  <Wrapper>
    <ButtonsCommercial>
      <ButtonOutlined text="Магазин" />
      <ButtonOutlined text="Компаниям" />
      <ButtonOutlined text="Спонсорство" />
    </ButtonsCommercial>
    <LogoWrapper><Logo /></LogoWrapper>
    <ButtonsContact>
      <ButtonOutlined text="Контакты" />
      <ButtonUnderlined text="Выберите город" />
    </ButtonsContact>
  </Wrapper>
);

export default Header;
