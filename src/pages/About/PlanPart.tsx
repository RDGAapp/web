import styled from 'styled-components';

import theme from 'helpers/theme';

const Container = styled.div`
  padding: 0.25rem 0;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  :last-of-type {
    border: none;
  }

  p {
    margin: auto;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
  }

  p:first-of-type {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

interface IPlanPartProps {
  text: string;
  yesText?: string;
  noText?: string;
  isSame?: boolean;
  isAllowed?: boolean;
  isSimpleText?: boolean;
}

const PlanPart = ({
  text,
  yesText = 'Да',
  noText = 'Нет',
  isSame,
  isAllowed,
  isSimpleText,
}: IPlanPartProps) => (
  <Container>
    <p>{text}</p>
    {isAllowed ? (
      <p
        style={{
          color: isSimpleText
            ? theme.colors.text.primary
            : theme.colors.success,
          fontWeight: isSame ? '100' : '900',
        }}
      >
        {yesText}
      </p>
    ) : (
      <p
        style={{
          color: theme.colors.error,
          fontWeight: isSame ? '100' : '900',
        }}
      >
        {noText}
      </p>
    )}
  </Container>
);

export default PlanPart;
