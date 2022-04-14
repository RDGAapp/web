import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getPlayers } from 'store/requests/player';
import Spinner from 'components/Spinner';
import Card from 'components/Card';
import SelectedCard from 'components/SelectedCard';
import PageHeader from 'components/PageHeader';

const Container = styled(motion.ul)`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: flex-start;
  width: calc(100% - 2rem);
  margin: auto;
  padding: 0 1rem 3rem;
  list-style: none;
`;

const Players = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.player.players);
  const loading = useAppSelector((state) => state.player.loading);

  const [selected, setSelected] = useState<Player | null>(null);

  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  return (
    <>
      <PageHeader text="Наши игроки" />
      {loading ? (<Spinner />)
        : (
          <Container>
            {players.map((player) => (
              <Card
                key={player.rdgaNumber}
                player={player}
                setSelected={() => setSelected(player)}
              />
            ))}
          </Container>
        )}

      <AnimatePresence>
        {selected && (
          <SelectedCard
            selected={selected}
            resetSelected={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Players;
