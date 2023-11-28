import styled from 'styled-components';

import { ReactComponent as AvatarSvg } from 'assets/icons/avatar.svg';

const Background = styled.div<{ disabled: boolean }>`
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100vh;

  & svg {
    height: 1.5rem;
  }

  ${({ disabled }) => disabled && `
    background-color: grey;
  `};
`;

interface IAvatarProps {
  disabled?: boolean;
}

const Avatar = ({ disabled }: IAvatarProps) => (
  <Background disabled={disabled ?? false}>
    <AvatarSvg />
  </Background>
);

export default Avatar;
