import styled from 'styled-components';

const Container = styled.div`
  padding: 0.25rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.neutral};
  text-align: center;

  &:last-of-type {
    border: none;
  }

  & p {
    margin: auto;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }

  & p:first-of-type {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Text = styled.p<{ $color: string }>`
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

interface IPlanPartProps {
  text: string;
  yesText?: string;
  noText?: string;
  isSame?: boolean;
  isAllowed?: boolean;
  isSimpleText?: boolean;
  isBigger?: boolean;
}

const PlanPart = ({
  text,
  yesText = 'Да',
  noText = 'Нет',
  isSame,
  isAllowed,
  isSimpleText,
  isBigger,
}: IPlanPartProps) => (
  <Container>
    <p>{text}</p>
    {isAllowed ? (
      <Text
        $color={isSimpleText ? 'inherit' : 'success'}
        style={{
          fontWeight: isSame ? '100' : '900',
          fontSize: isBigger ? '2rem' : '1rem',
        }}
      >
        {yesText}
      </Text>
    ) : (
      <Text
        $color='error'
        style={{
          fontWeight: isSame ? '100' : '900',
        }}
      >
        {noText}
      </Text>
    )}
  </Container>
);

export default PlanPart;
