import styled, { css } from 'styled-components';

import { ReactComponent as LocationSvg } from 'assets/icons/location.svg';
import { ReactComponent as SportsCategorySvg } from 'assets/icons/sportsCategory.svg';
import Avatar from 'components/Avatar';
import CustomLink from 'components/CustomLink';
import RatingChangeBadge from 'components/RatingChangeBadge';
import SportsCategoryNameByCategory from 'helpers/player/sportsCategoryNameByCategory';
import routes from 'helpers/routes';
import { IPlayer } from 'types/player';

const Container = styled.div<{ disabled?: boolean }>`
  @keyframes slide-in {
    from {
      transform: translateY(100%);
      opacity: 0;
    }

    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  width: 100%;
  height: 8rem;

  perspective: 20rem;

  animation: slide-in 500ms linear both;
  animation-fill-mode: forwards;
  animation-timeline: view(block 100% 0%);

  ${({ disabled }) =>
    !disabled &&
    `
      &:hover > div, &:focus-visible > div {
        transform: rotateX(180deg);
      }
    `}
`;

const CardContainer = styled.div`
  position: relative;
  transform-style: preserve-3d;

  width: 100%;
  height: 100%;

  transition: transform 750ms;
`;

const CommonSideStyles = css`
  position: absolute;

  display: flex;
  gap: 0.25rem;

  width: 100%;
  height: 100%;
  padding: 1rem;

  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  border-radius: 2rem;
`;

const FrontSide = styled.div<{ disabled?: boolean }>`
  ${CommonSideStyles}
  align-items: center;
  justify-content: space-between;

  ${({ disabled }) =>
    disabled &&
    `
      color: hsl(0, 0%, 100%);
      background-color: #b2b1b1af;
      cursor: not-allowed;
    `};
`;

const BackSide = styled.div`
  ${CommonSideStyles}
  transform: rotateX(180deg);
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;

  width: calc(100% - 4rem);
`;

const MainInformation = styled.p`
  overflow: hidden;

  width: 100%;

  font-size: 1rem;
  font-weight: bold;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AdditionalInformation = styled.p`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.8rem;
`;

const InfoLine = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;

  height: max-content;

  font-size: 1.2rem;
  line-height: 1;

  & svg {
    height: 1.5rem;
  }
`;

const ProfileLinkStyles = css`
  width: max-content;
  margin-top: auto;
  margin-left: auto;
  font-size: 0.5rem;

  &::before {
    height: 1px;
  }

  & > svg {
    width: 0.5rem;
  }

  &:hover > svg,
  &:focus-visible > svg {
    left: 1.4rem;
  }
`;

interface Props {
  player: IPlayer;
}

const Card = ({ player }: Props) => {
  const disabled = player.activeTo
    ? new Date(player.activeTo) < new Date()
    : true;

  return (
    <Container disabled={disabled}>
      <CardContainer>
        <FrontSide disabled={disabled}>
          <Avatar disabled={disabled} />
          <TextContainer>
            <MainInformation title={`${player.name} ${player.surname || ''}`}>
              {`${player.name} ${player.surname || ''}`}
            </MainInformation>
            <MainInformation>{`#${player.rdgaNumber}`}</MainInformation>
            {player.rdgaRating ? (
              <AdditionalInformation>
                {`Рейтинг: ${player.rdgaRating}`}
                <RatingChangeBadge
                  rating={player.rdgaRating}
                  ratingChange={player.rdgaRatingChange}
                />
              </AdditionalInformation>
            ) : (
              ''
            )}
          </TextContainer>
        </FrontSide>
        {!disabled && (
          <BackSide>
            <InfoLine>
              <LocationSvg />
              <p>{player.town || '-'}</p>
            </InfoLine>
            <InfoLine>
              <SportsCategorySvg />
              <p>
                {player.sportsCategory
                  ? SportsCategoryNameByCategory[player.sportsCategory]
                  : '-'}
              </p>
            </InfoLine>
            <CustomLink
              route={`${routes.Players}/${player.rdgaNumber}`}
              text='Перейти в профиль'
              styles={ProfileLinkStyles}
            />
          </BackSide>
        )}
      </CardContainer>
    </Container>
  );
};

export default Card;
