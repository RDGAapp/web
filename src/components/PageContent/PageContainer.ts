import styled from 'styled-components';

const PageContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
  padding: 1rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default PageContainer;
