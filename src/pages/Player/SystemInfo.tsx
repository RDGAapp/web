import { ReactElement } from 'react';

import styled from 'styled-components';

import RatingChangeBadge from 'components/RatingChangeBadge';
import { getTextOrDash } from 'helpers/textHelper';
import { IPlayerExtended } from 'types/player';

import CommonBadgeStyle from './CommonBadgeStyle';

const RatingCardContainer = styled.div`
  ${CommonBadgeStyle}
  display: grid;
  grid-column: span 3;
  grid-row: span 2;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;

  padding: 0;

  background-color: transparent;

  ${({ theme }) => theme.media.tablet} {
    grid-column: span 8;
    grid-row: span 1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-column: span 2;
    grid-row: span 1;
  }
`;

const RatingCard = styled.div`
  ${CommonBadgeStyle}
  isolation: isolate;
  position: relative;

  overflow: hidden;
  display: flex;
  grid-column: span 1 !important;
  grid-row: span 1;
  gap: 0.5rem;
  align-items: center;

  font-size: 1.2rem;
  font-weight: bold;

  & > img,
  & > svg {
    position: absolute;
    z-index: -1;
    top: 75%;
    right: -2rem;
    transform: translateY(-50%);
  }

  & > img {
    max-width: max-content;
    height: 100%;
  }

  & > svg {
    height: 200%;
  }

  & > span,
  & > a {
    font-size: 1.2rem;
  }

  & > a {
    text-decoration-color: transparent;
    text-decoration-style: wavy;
    transition: all 0.2s linear;

    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

interface ISystemInfoProps {
  number: IPlayerExtended['rdgaNumber' | 'pdgaNumber' | 'metrixNumber'];
  rating: IPlayerExtended['rdgaRating' | 'pdgaRating' | 'metrixRating'];
  logo: ReactElement;
  ratingChange?: IPlayerExtended['rdgaRatingChange' | 'metrixRatingChange'];
  link?: string;
}

const SystemInfo = ({
  number,
  rating,
  ratingChange,
  logo,
  link,
}: ISystemInfoProps) => (
  <RatingCardContainer>
    <RatingCard>
      {logo}
      {getTextOrDash({ text: number, link, prefix: '#' })}
    </RatingCard>
    <RatingCard>
      {logo}
      {rating || '-'}
      {!!rating && ratingChange != null && (
        <RatingChangeBadge rating={rating ?? 0} ratingChange={ratingChange} />
      )}
    </RatingCard>
  </RatingCardContainer>
);

export default SystemInfo;
