import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const PageNumber = styled.button<{ number?: boolean }>`
  width: 2rem;
  aspect-ratio: 1 / 1;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.8rem;
  background: none;
  border: none;
  border-radius: 100vh;
  box-shadow: 0 0 0.1rem;
  cursor: pointer;

  :disabled {
    background-color: none;
    cursor: not-allowed;
    ${({ number, theme }) => number && css`
      color: inherit;
      background-color: ${theme.colors.primary};
      cursor: default;
      opacity: 1;
    `}
  }

  :hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

interface Props {
  currentPageNumber: number,
  onPageChange: (number: number) => void,
  totalPagesNumber: number,
}

const Pagination = ({
  currentPageNumber,
  totalPagesNumber,
  onPageChange,
}: Props) => {
  if (totalPagesNumber <= 1) return null;
  const fillPagesNumberArray = (): number[] => {
    if (totalPagesNumber < 5) {
      return Array.from({ length: totalPagesNumber }, (_, i) => i + 1);
    }

    if (totalPagesNumber === 5 || currentPageNumber <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPageNumber >= totalPagesNumber - 2) {
      return [
        totalPagesNumber - 4,
        totalPagesNumber - 3,
        totalPagesNumber - 2,
        totalPagesNumber - 1,
        totalPagesNumber,
      ];
    }

    return [
      currentPageNumber - 2,
      currentPageNumber - 1,
      currentPageNumber,
      currentPageNumber + 1,
      currentPageNumber + 2,
    ];
  };

  const pages = fillPagesNumberArray();

  return (
    <Container>
      <PageNumber
        onClick={() => onPageChange(1)}
        title="Перейти на первую страницу"
        disabled={currentPageNumber === 1}
      >
        &laquo;
      </PageNumber>
      {pages.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={currentPageNumber === pageNumber}
          number
        >
          {pageNumber}
        </PageNumber>
      ))}
      <PageNumber
        onClick={() => onPageChange(totalPagesNumber)}
        title="Перейти на последнюю страницу"
        disabled={currentPageNumber === totalPagesNumber}
      >
        &raquo;
      </PageNumber>
    </Container>
  );
};

export default Pagination;
