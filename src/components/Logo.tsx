import styled from 'styled-components';

import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.h1<{ fontSize: number; textAlign: string }>`
  max-width: 22ch;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
  text-align: ${({ textAlign }) => textAlign};
`;

interface LogoProps {
  big?: boolean;
  withoutImage?: boolean;
  withoutText?: boolean;
  textAlign?: string;
}

const Logo = ({
  big = false,
  withoutImage = false,
  withoutText = false,
  textAlign = 'start',
}: LogoProps): JSX.Element => (
  <Container>
    {!withoutImage && (
      <LogoSvg width={big ? 120 : 40} height={big ? 115 : 36} />
    )}
    {!withoutText && (
      <Text fontSize={big ? 1.8 : 1.2} textAlign={textAlign}>
        РОССИЙСКАЯ ДИСК-ГОЛЬФ АССОЦИАЦИЯ
      </Text>
    )}
  </Container>
);

export default Logo;
