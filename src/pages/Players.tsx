import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import ContentContainer from 'components/ContentContainer';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getPlayers } from 'store/requests/player';
import Spinner from 'components/Spinner';

const Container = styled(motion.ul)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const Card = styled(motion.li)`
  display: flex;
  flex: 1 0 30%;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 2rem;
  cursor: pointer;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SelectedCard = styled(motion.div)`
  display: flex;
  flex: 1 0 30%;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  height: 80vh;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: 0 0 0 200vw ${({ theme }) => theme.colors.black}80;
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
    <ContentContainer>
      {loading ? (<Spinner />)
        : (
          <Container>
            {players.map((player) => (
              <Card
                key={player.rdgaNumber}
                layoutId={player.rdgaNumber.toString()}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelected(player)}
              >
                <h3>{`${player.name} ${player.surname || ''}`}</h3>
              </Card>
            ))}
          </Container>
        )}

      <AnimatePresence>
        {selected && (
          <Backdrop onClick={() => setSelected(null)}>
            <SelectedCard layoutId={selected.rdgaNumber.toString()}>
              <h3>{`${selected.name} ${selected.surname || ''}`}</h3>
            </SelectedCard>
          </Backdrop>
        )}
      </AnimatePresence>
    </ContentContainer>
  );
};

export default Players;
