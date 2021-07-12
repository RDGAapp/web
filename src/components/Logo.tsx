import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';

const Wrapper = styled.div`
  display: flex;
  width: 365px;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const Text = styled.div`
  font-family: Oswald, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  width: 280px;
  height: 48px;
`;

const Logo = (): JSX.Element => (
  <Wrapper>
    <img src={LogoSvg} alt="" />
    <Text>РОССИЙСКАЯ АССОЦИАЦИЯ ДИСК-ГОЛЬФА</Text>
  </Wrapper>
);

export default Logo;
