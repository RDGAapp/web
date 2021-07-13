import styled from 'styled-components';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';

const Wrapper = styled.div<{ width: number, height: number }>`
  display: flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div<{ fontSize: number, width: number }>`
  font-family: Oswald, sans-serif;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ fontSize }) => fontSize}px;
  width: ${({ width }) => width}px;
  height: ${({ fontSize }) => fontSize * 2}px;
`;

interface LogoProps {
  big?: boolean,
}

const Logo = ({ big }: LogoProps): JSX.Element => (
  <Wrapper width={big ? 550 : 365} height={big ? 115 : 64}>
    <LogoSvg width={big ? 120 : 64} height={big ? 115 : 60} />
    <Text fontSize={big ? 36 : 24} width={big ? 420 : 280}>
      РОССИЙСКАЯ АССОЦИАЦИЯ ДИСК-ГОЛЬФА
    </Text>
  </Wrapper>
);

Logo.defaultProps = {
  big: false,
};

export default Logo;
