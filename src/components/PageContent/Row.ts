import styled from 'styled-components';

const Row = styled.div<{ imagePosition: 'left' | 'right' }>`
  display: grid;

  ${({ imagePosition }) =>
    imagePosition === 'left'
      ? "grid-template-areas: 'picture description'"
      : "grid-template-areas: 'description picture'"};
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ${({ theme }) => theme.media.mobile} {
    grid-template-areas: 'picture' 'description';
    grid-template-columns: 1fr;
  }
`;

export default Row;
