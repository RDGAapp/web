import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FilterSvg from 'assets/icons/filter.svg?react';
import SelectSvg from 'assets/icons/select.svg?url';
import ButtonOutlined from 'components/ButtonOutlined';
import OverlayLoader from 'components/OverlayLoader';
import PageHeader from 'components/PageHeader';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import towns from 'helpers/townsList';
import useDebounce from 'hooks/useDebounce';
import useDialog from 'hooks/useDialog';
import Card from 'pages/Players/Card';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getPlayers } from 'store/players/thunks';
import { TTown } from 'types/town';

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  justify-content: flex-start;

  width: calc(100% - 2rem);
  margin: auto;
  padding: 0 1rem 2rem;

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
    flex-wrap: nowrap;
    width: 100%;
  }
`;

const Select = styled.select`
  cursor: pointer;

  width: 13rem;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};

  appearance: none;
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  background-image: url('${SelectSvg}');
  background-repeat: no-repeat;
  background-position: center right 1rem;
  background-size: 1rem;

  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
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
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

const Button = styled.button`
  ${ButtonOutlined}
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;

  & svg {
    width: 1rem;
  }
`;

const FiltersBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CheckboxContainer = styled.label`
  cursor: pointer;

  display: flex;
  gap: 0.2rem;
  align-items: center;

  height: 2rem;
`;

const Players = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { players, loading } = useAppSelector((state) => state.player);

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const [page, setPage] = useState<number>(
    Number(searchParams.get('page')) || 0,
  );
  const [surname, setSurname] = useState<string>(
    searchParams.get('surname') ?? '',
  );
  const [town, setTown] = useState<TTown>(
    (searchParams.get('town') ?? '') as TTown,
  );
  const [onlyActive, setOnlyActive] = useState<boolean>(
    searchParams.get('onlyActive') === 'true',
  );

  const filterRef = useRef<HTMLDivElement>(null);

  const { Dialog: FiltersDialog, openModal: openFiltersModal } = useDialog({
    headerText: 'Фильтры',
  });

  const scrollToPageHeader = () => {
    filterRef.current?.scrollIntoView();
  };

  useDebounce(
    () => {
      dispatch(getPlayers({ pageNumber: 1, surname, town, onlyActive }));
      setPage(1);
    },
    1000,
    [surname, town, onlyActive],
  );

  useDebounce(
    () => {
      if (!page) return;

      const params: Record<string, string> = {};
      if (page > 1) {
        params.page = page.toString();
      }
      if (surname) {
        params.surname = surname;
      }
      if (town) {
        params.town = town;
      }
      if (onlyActive) {
        params.onlyActive = onlyActive.toString();
      }

      const paramsString = new URLSearchParams(params).toString();

      navigate(
        { search: `?${paramsString}` },
        { replace: true, preventScrollReset: true },
      );
    },
    1000,
    [page, surname, town, onlyActive],
  );

  useEffect(() => {
    dispatch(getPlayers({ pageNumber: page, surname, town, onlyActive }));
  }, []);

  const onSelectTownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTown = event.target.value as TTown;
    setTown(newTown);
  };

  const onSurnameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value.replace(' ', ''));
  };

  const onPageNumberChange = (newPageNumber: number) => {
    setPage(newPageNumber);
    dispatch(
      getPlayers({ pageNumber: newPageNumber, surname, town, onlyActive }),
    );
    scrollToPageHeader();
  };

  return (
    <>
      <PageHeader text='Наши игроки'>
        <Filters ref={filterRef}>
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
      <OverlayLoader loading={loading}>
        {(players?.pagination.total ?? 0) === 0 && (
          <NotFoundContainer>
            <NotFoundText>
              Игрока с такими параметрами нет в нашей базе
            </NotFoundText>
          </NotFoundContainer>
        )}
        <Container>
          {players?.data.map((player) => (
            <Card key={player.rdgaNumber} player={player} />
          ))}
        </Container>

        {players && (
          <Pagination
            currentPageNumber={players.pagination.currentPage}
            totalPagesNumber={players.pagination.lastPage}
            onPageChange={onPageNumberChange}
          />
        )}
      </OverlayLoader>
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
