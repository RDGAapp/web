import { css } from 'styled-components';

const ButtonOutlined = css`
  padding: 0.4rem 0.8rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.6rem;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.lighterBackground};
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled {
    color: ${({ theme }) => theme.colors.text.neutral};
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default ButtonOutlined;
