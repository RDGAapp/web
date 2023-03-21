import styled from 'styled-components';

import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.h1<{ textAlign: string }>`
  max-width: 22ch;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: "${({ theme }) => theme.fontFamily.header}", sans-serif;
  line-height: 1;
  text-align: ${({ textAlign }) => textAlign};
`;

interface LogoProps {
  big?: boolean;
  withoutImage?: boolean;
  textAlign?: string;
}

const Logo = ({
  big = false,
  withoutImage = false,
  textAlign = 'start',
}: LogoProps): JSX.Element => (
  <Container>
    {!withoutImage && (
      <LogoSvg width={big ? 80 : 40} height={big ? 72 : 36} />
    )}
    <Text textAlign={textAlign}>
      РОССИЙСКАЯ ДИСК-ГОЛЬФ АССОЦИАЦИЯ
    </Text>
  </Container>
);

export default Logo;
