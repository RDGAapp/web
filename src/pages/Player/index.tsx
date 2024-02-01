import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as RdgaSvg } from 'assets/icons/logo.svg';
import { ReactComponent as PdgaSvg } from 'assets/icons/pdga.svg';
import MetrixImg from 'assets/images/metrix.webp';
import LogoLoader from 'components/LogoLoader';
import theme from 'helpers/theme';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getPlayer } from 'store/players/thunks';

import MainInfo from './MainInfo';
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

const Player = () => {
  const dispatch = useAppDispatch();

  const {
    player,
    loading,
    error,
  } = useAppSelector((state) => state.player);

  const params = useParams();

  const { rdgaNumber } = params;

  useEffect(() => {
    if (!rdgaNumber || Number.isNaN(Number(rdgaNumber))) return;

    dispatch(getPlayer(Number(rdgaNumber)));
  }, [rdgaNumber]);

  if (loading) return <LogoLoader />;

  if (error || !player) return <div>{error || 'Что-то пошло не так'}</div>;

  return (
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
        logo={<PdgaSvg fill={theme.dark.colors.secondary} />}
        link={`https://pdga.com/player/${player.pdgaNumber}`}
      />
      <SystemInfo
        number={player.metrixNumber}
        rating={player.metrixRating}
        logo={<img src={MetrixImg} alt='metrix' />}
        link={`https://discgolfmetrix.com/player/${player.metrixNumber}`}
      />
    </Container>
  );
};

export default Player;
