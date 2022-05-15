import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import Card from 'components/Card';
import PageHeader from 'components/PageHeader';
import Pagination from 'components/Pagination';
import SelectedCard from 'components/SelectedCard';
import Spinner from 'components/Spinner';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getPlayers } from 'store/requests/player';

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
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [surname, setSurname] = useState<string>('');
  const [town, setTown] = useState<Town>();
  const pageHeader = document.getElementById('page-header');

  const scrollToPageHeader = () => {
    window.scrollTo({ top: pageHeader?.offsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(getPlayers({ pageNumber, surname, town }));
  }, [pageNumber]);

  useEffect(() => {
    if (players && !loading && pageNumber !== 0) {
      scrollToPageHeader();
    }
  }, [players]);

  return (
    <>
      <PageHeader text="Наши игроки" shouldLinkToMainPage />
      {loading && <Spinner />}
      <Container>
        {players?.data.map((player) => (
          <Card
            key={player.rdgaNumber}
            player={player}
            setSelected={() => setSelected(player)}
          />
        ))}
      </Container>

      <AnimatePresence>
        {selected && (
          <SelectedCard
            selected={selected}
            resetSelected={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
      {players && (
        <Pagination
          currentPageNumber={players.pagination.currentPage}
          totalPagesNumber={players.pagination.lastPage}
          onPageChange={setPageNumber}
        />
      )}
    </>
  );
};

export default Players;
