import styled from 'styled-components';

import Contacts from 'components/Contacts';
import Logo from 'components/Logo';
import useMatchMedia from 'hooks/useMatchMedia';

const PrimaryBackground = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 72rem;
  margin: auto;
  padding: 3rem 1rem;
`;

const Header = styled.h1`
  font-weight: 400;
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Copyright = styled.p`
  align-self: flex-end;
  font-size: 0.7rem;
  line-height: 1;

  ${({ theme }) => theme.media.tablet} {
    align-self: center;
  }
`;

const Footer = (): JSX.Element => {
  const { isDesktop } = useMatchMedia();
  return (
    <PrimaryBackground>
      <Container id="contacts">
        <Header>Контакты</Header>
        <Contacts />
        <LogoContainer>
          <Logo big={isDesktop} />
          <Copyright>© АССОЦИАЦИЯ ИГРОКОВ В ДИСК-ГОЛЬФ</Copyright>
        </LogoContainer>
      </Container>
    </PrimaryBackground>
  );
};

export default Footer;
