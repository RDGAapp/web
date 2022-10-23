import styled, { css } from 'styled-components';

const commonBadgeStyle = css`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.8rem;
`;

const BadgeNew = styled.span`
  ${commonBadgeStyle}
  height: 1.4rem;
  padding: 0.1rem 0.5rem;
  color: ${({ theme }) => theme.colors.text.contrast};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100vh;
`;

const Badge = styled.span<{ increased: boolean }>`
  ${commonBadgeStyle}
  color: ${({ theme, increased }) => (increased ? theme.colors.success : theme.colors.error)};
`;

const BadgeNeutral = styled.span`
  ${commonBadgeStyle}
  color: ${({ theme }) => theme.colors.text.neutral};
`;

interface Props {
  rating: number,
  ratingChange?: number,
}

const RatingChangeBadge = ({ rating, ratingChange }: Props) => {
  if (ratingChange === 0) return <BadgeNeutral>→ 0</BadgeNeutral>;

  if (!ratingChange) return null;

  if (rating === ratingChange) return <BadgeNew>new</BadgeNew>;

  const ratingIncreased = ratingChange > 0;
  return (
    <Badge increased={ratingIncreased}>
      {ratingIncreased ? '↗' : '↘'}
      {' '}
      {Math.abs(ratingChange)}
    </Badge>
  );
};

export default RatingChangeBadge;
