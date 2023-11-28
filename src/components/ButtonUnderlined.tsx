import { ReactNode } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: 0.6rem;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  transition: scale 0.2s ease-in-out;

  &:hover {
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
