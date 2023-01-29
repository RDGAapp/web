import styled from 'styled-components';

import Logo from 'components/Logo';
import useMatchMedia from 'hooks/useMatchMedia';

const PrimaryBackground = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 72rem;
  margin: auto;
  padding: 1rem;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  align-self: flex-end;
  font-size: 0.7rem;
  line-height: 1;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.7rem;
    line-height: 1;
  }

  ${({ theme }) => theme.media.tablet} {
    align-self: center;
  }
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Footer = (): JSX.Element => {
  const { isDesktop } = useMatchMedia();
  return (
    <PrimaryBackground>
      <Container>
        <Logo big={isDesktop} />
        <CopyrightContainer>
          <Copyright>© АССОЦИАЦИЯ ИГРОКОВ В ДИСК-ГОЛЬФ</Copyright>
          <Copyright>
            Designed by{' '}
            <a href='https://www.akh.digital/' rel='noreferrer' target='_blank'>
              Aleks Kholopov
            </a>{' '}
            and{' '}
            <a
              href='https://ilyacherkasov.github.io'
              rel='noreferrer'
              target='_blank'
            >
              Ilya Cherkasov
            </a>
          </Copyright>
        </CopyrightContainer>
      </Container>
    </PrimaryBackground>
  );
};

export default Footer;
