import styled from 'styled-components';
import Logo from 'components/Logo';
import appTheme from 'helpers/theme';
import Contacts from 'components/Contacts';
import useWindowDimensions from 'helpers/useWindowDimensions';

const BackgroundContacts = styled.footer`
  background: ${({ theme }) => theme.colors.yellow};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1440px;
  margin: auto;
  padding: 60px 20px;
`;

const Header = styled.h1`
  width: 100%;
  margin: 0 0 60px;
  font-weight: 400;
  font-size: 48px;
  font-family: Oswald, sans-serif;
  line-height: 48px;
`;

const Copyright = styled.p`
  align-self: flex-end;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  font-family: Inter, sans-serif;
  line-height: 14px;

  ${({ theme }) => theme.breakpoints.tablet} {
    align-self: center;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    gap: 60px;
    align-items: center;
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
