import {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useRef,
  useState,
  type JSX,
} from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FilterSvg from 'assets/icons/filter.svg?react';
import SelectSvg from 'assets/icons/select.svg?url';
import Button from 'components/Button';
import OverlayLoader from 'components/OverlayLoader';
import PageHeader from 'components/PageHeader';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import towns from 'helpers/townsList';
import useDebounce from 'hooks/useDebounce';
import useDialog from 'hooks/useDialog';
import Card from 'pages/Players/Card';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getPlayers } from 'store/players/thunks';
import { TTown } from 'types/town';

import styles from './styles.module.css';

const ButtonStyled = styled(Button)`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;

  & svg {
    width: 1rem;
  }
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
        <div ref={filterRef} className={styles.filters}>
          <SearchBar
            value={surname}
            placeholder='Введите фамилию'
            onChange={onSurnameInputChange}
            ariaLabel='surname-search'
          />
          <ButtonStyled onClick={openFiltersModal}>
            <FilterSvg />
          </ButtonStyled>
        </div>
      </PageHeader>
      <OverlayLoader loading={loading}>
        {(players?.pagination.total ?? 0) === 0 && (
          <div className={styles['not-found']}>
            <p>Игрока с такими параметрами нет в нашей базе</p>
          </div>
        )}
        <ul className={styles.players}>
          {players?.data.map((player) => (
            <Card key={player.rdgaNumber} player={player} />
          ))}
        </ul>

        {players && (
          <Pagination
            currentPageNumber={players.pagination.currentPage}
            totalPagesNumber={players.pagination.lastPage}
            onPageChange={onPageNumberChange}
          />
        )}
      </OverlayLoader>
      <FiltersDialog>
        <div className={styles['filters-modal']}>
          <label className={styles.checkbox}>
            <input
              type='checkbox'
              checked={onlyActive}
              onChange={(event) => setOnlyActive(event.target.checked)}
            />
            Только активные
          </label>
          <select
            className={styles.select}
            value={town}
            onChange={onSelectTownChange}
            style={{ '--bg-image': `url('${SelectSvg}')` } as CSSProperties}
          >
            <option value=''>Выберите город</option>
            {towns.map((town) => (
              <option value={town} key={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
      </FiltersDialog>
    </>
  );
};

export default Players;
