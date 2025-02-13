import { css } from 'styled-components';

const ButtonOutlined = css`
  cursor: pointer;

  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 2rem;

  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  background: ${({ theme }) => theme.colors.lighterBackground};

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.text.neutral};
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default ButtonOutlined;
