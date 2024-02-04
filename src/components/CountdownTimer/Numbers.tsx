import styled from 'styled-components';

import { spell } from 'helpers/wordHelpers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p:first-of-type {
    font-family: monospace;
    font-size: 6rem;
    font-weight: bold;
    line-height: 1;
  }

  ${({ theme }) => theme.media.mobile} {
    & > p:first-of-type {
      font-size: 3rem;
    }
  }
`;

const formatNumber = (number: number) => String(number).padStart(2, '0');

interface INumbersProps {
  value: number;
  words: [string, string, string];
}

const Numbers = ({ value, words }: INumbersProps) => (
  <Container>
    <p>{formatNumber(value)}</p>
    <p>{spell(value, words)}</p>
  </Container>
);

export default Numbers;
