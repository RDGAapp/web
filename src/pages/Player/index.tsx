import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as RdgaSvg } from 'assets/icons/logo.svg';
import { ReactComponent as PdgaSvg } from 'assets/icons/pdga.svg';
import MetrixImg from 'assets/images/metrix.webp';
import Breadcrumbs from 'components/Breadcrumbs';
import LogoLoader from 'components/LogoLoader';
import routes from 'helpers/routes';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getPlayer } from 'store/players/thunks';

import CommonBadgeStyle from './CommonBadgeStyle';
import MainInfo from './MainInfo';
import SubscriptionInfo from './SubscriptionInfo';
import SystemInfo from './SystemInfo';

const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;

  ${({ theme }) => theme.media.mobile} {
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

  ${({ theme }) => theme.media.tablet} {
    grid-column: span 8;
    grid-row: span 1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-column: span 2;
    grid-row: span 2;
    grid-template-columns: 1fr;
  }
`;

const PdgaSvgColored = () => <PdgaSvg fill='hsl(217, 84%, 45%)' />;

const Player = () => {
  const dispatch = useAppDispatch();

  const { player, loading, error } = useAppSelector((state) => state.player);

  const params = useParams();

  const { rdgaNumber } = params;

  useEffect(() => {
    if (!rdgaNumber || Number.isNaN(Number(rdgaNumber))) return;

    dispatch(getPlayer(Number(rdgaNumber)));
  }, [rdgaNumber]);

  if (loading) return <LogoLoader />;

  if (error || !player)
    return (
      <>
        <Breadcrumbs />
        <div>Что-то пошло не так</div>
      </>
    );

  return (
    <>
      <Breadcrumbs />
      <Container>
        <MainInfo
          name={player.name}
          surname={player.surname}
          town={player.town}
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
          logo={<PdgaSvgColored />}
          link={`https://pdga.com/player/${player.pdgaNumber}`}
        />
        <SystemInfo
          number={player.metrixNumber}
          rating={player.metrixRating}
          logo={<img src={MetrixImg} alt='metrix' />}
          link={`https://discgolfmetrix.com/player/${player.metrixNumber}`}
        />
        <Subscription>
          <SubscriptionInfo
            activeTo={player.activeTo}
            logo={<RdgaSvg />}
            link={`${routes.About}${routes.Join}`}
          />
          <SubscriptionInfo
            activeTo={null}
            logo={<PdgaSvgColored />}
            link='https://www.pdga.com/membership'
          />
        </Subscription>
      </Container>
    </>
  );
};

export default Player;
