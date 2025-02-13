import { ReactNode } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;

  display: flex;
  gap: 0.2rem;
  align-items: center;

  width: max-content;
  border: none;

  font-size: 0.6rem;
  font-weight: 500;
  text-decoration: underline;

  background: none;

  transition: scale 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
`;

interface ButtonUnderlinedProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonUnderlined = ({
  children,
  onClick,
}: ButtonUnderlinedProps): JSX.Element => (
  <Button onClick={onClick}>{children}</Button>
);

export default ButtonUnderlined;
