import styled from 'styled-components';
import { ReactComponent as AvatarSvg } from 'assets/avatar.svg';

const Background = styled.div`
  flex: 0;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 100vh;
  box-shadow: 0 0 0.1rem;

  svg {
    width: inherit;
    fill: currentColor;
  }
`;

const Avatar = () => (
  <Background>
    <AvatarSvg />
  </Background>
);

export default Avatar;
