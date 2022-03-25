import styled from 'styled-components';
import Logo from 'components/Logo';
import appTheme from 'helpers/theme';
import Contacts from 'components/Contacts';
import useWindowDimensions from 'helpers/useWindowDimensions';

const BackgroundContacts = styled.footer`
  background: ${({ theme }) => theme.colors.yellow};
`;

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 20px;
  margin: auto;
`;

const Header = styled.h1`
  font-family: Oswald, sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  width: 100%;
  margin: 0 0 60px;
`;

const Copyright = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  align-self: flex-end;
  margin: 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    align-self: center;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`;

const Footer = (): JSX.Element => {
  const { width } = useWindowDimensions();
  return (
    <BackgroundContacts>
      <Wrapper id="contacts">
        <Header>Контакты</Header>
        <Contacts />
        <BottomWrapper>
          <Logo big={width >= appTheme.breakpoints.tabletPx} />
          <Copyright>© АССОЦИАЦИЯ ИГРОКОВ В ДИСК-ГОЛЬФ</Copyright>
        </BottomWrapper>
      </Wrapper>
    </BackgroundContacts>
  );
};

export default Footer;
