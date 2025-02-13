import styled, { css } from 'styled-components';

import { IPlayer } from 'types/player';

const commonBadgeStyle = css`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const BadgeNew = styled.span`
  ${commonBadgeStyle}
  height: 1.4rem;
  padding: 0.1rem 0.5rem;
  border-radius: 100vh;

  color: ${({ theme }) => theme.colors.text.contrast};

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Badge = styled.span<{ $increased: string }>`
  ${commonBadgeStyle}
  color: ${({ theme, $increased }) =>
    $increased === 'true' ? theme.colors.success : theme.colors.error};
`;

const BadgeNeutral = styled.span`
  ${commonBadgeStyle}
  color: ${({ theme }) => theme.colors.text.neutral};
`;

interface Props {
  rating: IPlayer['rdgaRating'];
  ratingChange: IPlayer['rdgaRatingChange'];
}

const RatingChangeBadge = ({ rating, ratingChange }: Props) => {
  if (ratingChange === 0) return <BadgeNeutral>→ 0</BadgeNeutral>;

  if (!ratingChange) return null;

  if (rating === ratingChange) return <BadgeNew>new</BadgeNew>;

  const ratingIncreased = ratingChange > 0;
  return (
    <Badge $increased={ratingIncreased.toString()}>
      {ratingIncreased ? '↗' : '↘'} {Math.abs(ratingChange)}
    </Badge>
  );
};

export default RatingChangeBadge;
