import { ChangeEvent, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { ReactComponent as FilterSvg } from 'assets/icons/filter.svg';
import SelectSvg from 'assets/icons/select.svg';
import ButtonOutlined from 'components/ButtonOutlined';
import PageHeader from 'components/PageHeader';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import towns from 'helpers/townsList';
import useDebounce from 'hooks/useDebounce';
import useDialog from 'hooks/useDialog';
import Card from 'pages/Players/Card';
import SelectedCard from 'pages/Players/SelectedCard';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getPlayers } from 'store/players/thunks';

const Container = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  justify-content: flex-start;
  width: calc(100% - 2rem);
  margin: auto;
  padding: 0 1rem 3rem;
  list-style: none;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
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
    flex-flow: row nowrap;
    align-items: center;
  }
`;

const Select = styled.select`
  width: 13rem;
  padding: 0.4rem 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url('${SelectSvg}');
  background-repeat: no-repeat;
  background-position: center right 1rem;
  background-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  appearance: none;

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  :active {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NotFoundText = styled.p`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
`;

const Button = styled.button`
  ${ButtonOutlined}
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;

  svg {
    width: 1rem;
  }
`;

const FiltersBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CheckboxContainer = styled.label`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  height: 2rem;
  cursor: pointer;
`;

const Players = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.player.players);
  const loading = useAppSelector((state) => state.player.loading);

  const [selected, setSelected] = useState<Player | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [surname, setSurname] = useState<string>('');
  const [town, setTown] = useState<Town>();
  const [onlyActive, setOnlyActive] = useState<boolean>(true);

  const pageHeader = document.getElementById('page-header');

  const { Dialog: FiltersDialog, openModal: openFiltersModal } = useDialog({
    headerText: 'Фильтры по игрокам',
    onClose: () => {
      dispatch(getPlayers({ pageNumber: 1, surname, town, onlyActive }));
      setPageNumber(1);
    },
  });

  const scrollToPageHeader = () => {
    window.scrollTo({ top: pageHeader?.offsetTop, behavior: 'smooth' });
  };

  useDebounce(
    () => {
      dispatch(getPlayers({ pageNumber: 1, surname, town, onlyActive }));
      setPageNumber(1);
    },
    1000,
    [surname]
  );

  useEffect(() => {
    dispatch(getPlayers({ pageNumber, surname, town, onlyActive }));
  }, []);

  useEffect(() => {
    if (players && !loading && pageNumber !== 0) {
      scrollToPageHeader();
    }
  }, [players]);

  const onSelectTownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTown = event.target.value as Town;
    setTown(newTown);
  };

  const onSurnameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value.replace(' ', ''));
  };

  const onPageNumberChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
    dispatch(getPlayers({ pageNumber: newPageNumber, surname, town }));
  };

  return (
    <>
      <PageHeader text='Наши игроки'>
        <Filters>
          <SearchBar
            value={surname}
            placeholder='Введите фамилию'
            onChange={onSurnameInputChange}
            ariaLabel='surname-search'
          />
          <Button onClick={openFiltersModal}>
            <FilterSvg />
          </Button>
        </Filters>
      </PageHeader>
      {loading && <Spinner />}
      {(players?.pagination.total ?? 0) === 0 && (
        <NotFoundContainer>
          <NotFoundText>
            Игрока с такими параметрами нет в нашей базе
          </NotFoundText>
        </NotFoundContainer>
      )}
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
          onPageChange={onPageNumberChange}
        />
      )}
      <FiltersDialog>
        <FiltersBody>
          <CheckboxContainer>
            <input
              type='checkbox'
              checked={onlyActive}
              onChange={(event) => setOnlyActive(event.target.checked)}
            />
            Только активные
          </CheckboxContainer>
          <Select value={town} onChange={onSelectTownChange}>
            <option value=''>Выберите город</option>
            {towns.map((town) => (
              <option value={town} key={town}>
                {town}
              </option>
            ))}
          </Select>
        </FiltersBody>
      </FiltersDialog>
    </>
  );
};

export default Players;
