import React, { ChangeEvent, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import SelectSvg from 'assets/icons/select.svg';
import NotFoundImage from 'assets/images/not-found.webp';
import Card from 'components/Card';
import PageHeader from 'components/PageHeader';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import SelectedCard from 'components/SelectedCard';
import Spinner from 'components/Spinner';
import towns from 'helpers/townsList';
import useDebounce from 'hooks/useDebounce';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getPlayers } from 'store/requests/player';

const Container = styled(motion.ul)`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: flex-start;
  width: calc(100% - 2rem);
  margin: auto;
  padding: 0 1rem 3rem;
  list-style: none;
`;

const Filters = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
  }
`;

const Select = styled.select`
  width: 13rem;
  padding: 0.4rem 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  background-image: url(${SelectSvg});
  background-repeat: no-repeat;
  background-position: center right 1rem;
  background-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  cursor: pointer;
  appearance: none;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NotFound = styled.img`
  border-radius: 2rem;
`;

const NotFoundText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  transform: translate(-50%, -50%);
`;

const Players = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.player.players);
  const loading = useAppSelector((state) => state.player.loading);

  const [selected, setSelected] = useState<Player | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [surname, setSurname] = useState<string>('');
  const [town, setTown] = useState<Town>();
  const pageHeader = document.getElementById('page-header');

  const scrollToPageHeader = () => {
    window.scrollTo({ top: pageHeader?.offsetTop, behavior: 'smooth' });
  };

  useDebounce(
    () => dispatch(getPlayers({ pageNumber, surname, town })),
    1000,
    [surname],
  );

  useEffect(() => {
    dispatch(getPlayers({ pageNumber, surname, town }));
  }, [pageNumber, town]);

  useEffect(() => {
    if (players && !loading && pageNumber !== 0) {
      scrollToPageHeader();
    }
  }, [players]);

  const onSelectTownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTown(event.target.value as Town);
  };

  const onSurnameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value.replace(' ', ''));
  };

  return (
    <>
      <PageHeader text="Наши игроки" shouldLinkToMainPage>
        <Filters>
          <SearchBar
            value={surname}
            placeholder="Введите фамилию"
            onChange={onSurnameInputChange}
            ariaLabel="surname-search"
          />
          <Select
            value={town}
            onChange={onSelectTownChange}
          >
            <option value="">
              Выберите город
            </option>
            {towns.map((town) => <option value={town} key={town}>{town}</option>)}
          </Select>
        </Filters>
      </PageHeader>
      {loading && <Spinner />}
      <Container>
        {players?.data.map((player) => (
          <Card
            key={player.rdgaNumber}
            player={player}
            setSelected={() => setSelected(player)}
          />
        ))}
        {(players?.pagination.total ?? 0) === 0 && (
        <>
          <NotFoundText>
            Игрока с такими параметрами нет в нашей базе
          </NotFoundText>
          <NotFound src={NotFoundImage} alt="Игрок не найден" />
        </>
        )}
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
