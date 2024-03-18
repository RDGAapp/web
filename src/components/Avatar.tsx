import { CSSProperties } from 'react';

import styled from 'styled-components';

import AvatarSvg from 'assets/icons/avatar.svg?url';

const Background = styled.div<{ disabled: boolean; $image?: string | null }>`
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;
  min-width: 3rem;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('${({ $image }) => $image}'), url('${AvatarSvg}');
  background-repeat: no-repeat;
  background-position:
    center,
    center 10px;
  background-size: cover;
  border-radius: 100vh;
  outline: 0.2rem solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.lighterBackground};

  ${({ disabled }) =>
    disabled &&
    `
    background-color: grey;
    outline: 0.2rem solid grey;
  `};
`;

interface IAvatarProps {
  imageSrc?: string | null;
  disabled?: boolean;
  style?: CSSProperties;
}

const Avatar = ({ disabled, imageSrc, style }: IAvatarProps) => (
  <Background
    id='avatar'
    disabled={disabled ?? false}
    $image={imageSrc}
    style={style}
  />
);

export default Avatar;
