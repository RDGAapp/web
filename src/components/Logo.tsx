import styled from 'styled-components';

import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.h1<{ fontSize: number } >`
  max-width: 22ch;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
`;

interface LogoProps {
  big?: boolean,
}

const Logo = ({ big = false }: LogoProps): JSX.Element => (
  <Container>
    <LogoSvg width={big ? 120 : 64} height={big ? 115 : 60} />
    <Text fontSize={big ? 1.8 : 1.2}>
      РОССИЙСКАЯ ДИСК-ГОЛЬФ АССОЦИАЦИЯ
    </Text>
  </Container>
);

export default Logo;
