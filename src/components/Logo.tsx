import { CSSProperties } from 'react';

import styled from 'styled-components';

import LogoSvg from 'assets/icons/logo.svg?react';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Text = styled.h1<{ $textAlign: string }>`
  max-width: 22ch;

  font-family: '${({ theme }) => theme.fontFamily.header}', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1;
  text-align: ${({ $textAlign }) => $textAlign};
`;

interface LogoProps {
  big?: boolean;
  withoutImage?: boolean;
  textAlign?: CSSProperties['textAlign'];
}

const Logo = ({
  big = false,
  withoutImage = false,
  textAlign = 'start',
}: LogoProps): JSX.Element => (
  <Container>
    {!withoutImage && <LogoSvg width={big ? 80 : 40} height={big ? 72 : 36} />}
    <Text $textAlign={textAlign}>РОССИЙСКАЯ ДИСК-ГОЛЬФ АССОЦИАЦИЯ</Text>
  </Container>
);

export default Logo;
