import { useEffect } from 'react';

import styled from 'styled-components';

import RdgaSvg from 'assets/icons/logo.svg?react';
import MetrixSvg from 'assets/icons/metrix.svg?react';
import PdgaSvg from 'assets/icons/pdga.svg?react';
import LogoLoader from 'components/LogoLoader';
import routes from 'helpers/routes';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getPlayer } from 'store/players/thunks';

import CommonBadgeStyle from './CommonBadgeStyle';
import MainInfo from './MainInfo';
import SportsCategoryBadge from './SportsCategoryBadge';
import SubscriptionInfo from './SubscriptionInfo';
import SystemInfo from './SystemInfo';

const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;

  @media (width <= 767) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Subscription = styled.div`
  ${CommonBadgeStyle}
  display: grid;
  grid-column: span 9;
  grid-row: span 2;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  padding: 0;

  background-color: transparent;

  @media (width <= 1024) {
    grid-column: span 8;
    grid-row: span 1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media (width <= 767) {
    grid-column: span 2;
    grid-row: span 2;
    grid-template-columns: 1fr;
  }
`;

const PdgaSvgColored = styled(PdgaSvg)`
  fill: light-dark(oklch(0.5 0.2 260), oklch(0.6 0.2 260));
`;

interface IProfile {
  rdgaNumber: number;
}

const Profile = ({ rdgaNumber }: IProfile) => {
  const dispatch = useAppDispatch();

  const { player, loading, error } = useAppSelector((state) => state.player);

  useEffect(() => {
    if (!rdgaNumber || Number.isNaN(rdgaNumber)) return;

    dispatch(getPlayer(Number(rdgaNumber)));
  }, [rdgaNumber]);

  if (loading) return <LogoLoader />;

  if (!player || error) {
    return <div>Что-то пошло не так</div>;
  }

  return (
    <Container>
      <MainInfo
        name={player.name}
        surname={player.surname}
        town={player.town}
        avatarUrl={player.avatarUrl}
      />
      <SystemInfo
        number={player.rdgaNumber}
        rating={player.rdgaRating}
        ratingChange={player.rdgaRatingChange}
        logo={<RdgaSvg />}
      />
      <SystemInfo
        number={player.pdgaNumber}
        rating={player.pdgaRating}
        ratingChange={player.pdgaRatingChange}
        logo={<PdgaSvgColored />}
        link={`https://pdga.com/player/${player.pdgaNumber}`}
      />
      <SystemInfo
        number={player.metrixNumber}
        rating={player.metrixRating}
        ratingChange={player.metrixRatingChange}
        logo={<MetrixSvg fill='oklch(0.7 0.2 43)' />}
        link={`https://discgolfmetrix.com/player/${player.metrixNumber}`}
      />
      <Subscription>
        <SubscriptionInfo
          activeTo={player.activeTo}
          logo={<RdgaSvg />}
          link={`${routes.About}${routes.Join}`}
        />
        <SubscriptionInfo
          activeTo={player.pdgaActiveTo}
          logo={<PdgaSvgColored />}
          link='https://www.pdga.com/membership'
        />
      </Subscription>
      <SportsCategoryBadge sportsCategory={player.sportsCategory} />
    </Container>
  );
};

export default Profile;
