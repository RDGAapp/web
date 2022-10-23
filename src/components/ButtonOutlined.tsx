import { css } from 'styled-components';

const ButtonOutlined = css`
  padding: 0.4rem 0.8rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.6rem;
  text-decoration: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.text.neutral};
    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.text.neutral};
    cursor: not-allowed;
  }
`;

export default ButtonOutlined;
