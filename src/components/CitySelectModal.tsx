import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styled, { css } from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/arrow-right.svg';
import { ReactComponent as CrossSvg } from 'assets/cross.svg';
import useCity, { changeCity } from 'helpers/useCity';

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;

  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ListElement = styled.p<{ selected: boolean }>`
  display: flex;
  align-items: center;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  line-height: 1;
  ${({ selected }) => !selected && css`
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  `}

  svg {
    margin-right: 1rem;
  }
`;

interface CitySelectModalProps {
  isOpen: boolean,
  onClose: () => void,
}

const cities = [
  'Белгород',
  'Екатеринбург',
  'Калининград',
  'Москва',
  'Нижний Новгород',
  'Псков',
  'Санкт-Петербург',
  'Тольятти',
];

const CitySelectModal = ({ isOpen, onClose }: CitySelectModalProps): JSX.Element => {
  const city = useCity();
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{
        modal: {
          borderRadius: '2rem',
          width: '60%',
          maxWidth: '23rem',
          padding: '1.5rem 2.5rem',
        },
      }}
      animationDuration={0}
    >
      <Header>
        {'Выберите город'.toUpperCase()}
        <CrossSvg height={17} onClick={onClose} />
      </Header>
      <List>
        {!city && (
        <ListElement selected>
          <ArrowSvg width={20} height={19} />
          {'Город не выбран'.toUpperCase()}
        </ListElement>
        )}
        {cities.map((item) => (
          <ListElement
            key={item}
            selected={item === city}
            onClick={() => {
              changeCity(item);
              onClose();
            }}
          >
            {item === city && <ArrowSvg width={20} height={19} />}
            {item.toUpperCase()}
          </ListElement>
        ))}
      </List>
    </Modal>
  );
};

export default CitySelectModal;
