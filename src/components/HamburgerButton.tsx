import { ButtonHTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

const OpenedButton = css`
  & .top {
    y: 43.5px;
    transform: rotate(-45deg);
  }

  & .bot {
    y: 46.5px;
    transform: rotate(45deg);
  }

  & .mid {
    opacity: 0;
  }

  & rect {
    transition: y 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s,
      opacity 0s 0.2s;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: transparent;
  border-radius: 100vh;
  cursor: pointer;
  transition: scale 0.2s ease-in-out;

  & rect {
    transform-origin: center;
    transition: y 0.2s ease-in-out 0.2s, transform 0.2s ease-in-out,
      opacity 0s 0.2s;

    & .top,
    & .bot {
      transform: rotate(0deg);
    }
  }

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }

  & svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: currentColor;
  }

  ${(props) => props['aria-expanded'] && OpenedButton}
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
}

const HamburgerButton = ({ open, onClick }: Props) => (
  <Button
    type='button'
    aria-controls='primary-navigation'
    aria-expanded={open}
    onClick={onClick}
  >
    <svg viewBox='0 0 100 100'>
      <rect
        className='top'
        x='8'
        y='20'
        width='80'
        height='10'
        rx='5'
      />
      <rect
        className='mid'
        x='8'
        y='45'
        width='80'
        height='10'
        rx='5'
      />
      <rect
        className='bot'
        x='8'
        y='70'
        width='80'
        height='10'
        rx='5'
      />
    </svg>
  </Button>
);

export default HamburgerButton;
