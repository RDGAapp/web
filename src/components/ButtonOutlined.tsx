import { css } from 'styled-components';

const ButtonOutlined = css`
  cursor: pointer;

  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 2rem;

  font-size: 0.6rem;
  color: var(--color-text-primary);
  text-decoration: none;

  background: var(--color-background-lighter);

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    color: var(--color-text-neutral);
    background-color: var(--color-background);
  }

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    color: var(--color-black);
    background: var(--color-primary);
  }
`;

export default ButtonOutlined;
