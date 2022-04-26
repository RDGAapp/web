import styled from 'styled-components';

import { ReactComponent as AvatarSvg } from 'assets/avatar.svg';

const Background = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.avatarBackground};
  border-radius: 100vh;
  box-shadow: 0 0 0.1rem;

  svg {
    height: 1.5rem;
  }
`;

const Avatar = () => (
  <Background>
    <AvatarSvg />
  </Background>
);

export default Avatar;
