import { css } from 'styled-components';

export default css`
  width: 100%;
  height: 100%;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.lighterBackground};
`;
