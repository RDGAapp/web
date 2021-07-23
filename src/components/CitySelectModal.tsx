import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';
import { ReactComponent as Cross } from 'assets/cross.svg';
import { ReactComponent as Arrow } from 'assets/arrow-right.svg';
import useCity, { changeCity } from '../helpers/useCity';

const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  margin: 0 0 40px;

  svg { cursor: pointer; }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ListElement = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  line-height: 24px;
  cursor: pointer;

  svg {
    margin-right: 25px;
  }
`;

interface CitySelectModalProps {
  isOpen: boolean,
  onClose: () => void,
}

const cities = [
  'Екатеринбург',
  'Санкт-Петербург',
  'Москва',
  'Нижний Новгород',
  'Белгород',
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
          borderRadius: '40px',
          width: '100%',
          maxWidth: '450px',
          padding: '32px 48px',
        },
      }}
    >
      <Header>
        {'Выберите город'.toUpperCase()}
        <Cross width={17} height={17} onClick={onClose} />
      </Header>
      <List>
        {!city && (
        <ListElement selected>
          <Arrow width={20} height={19} />
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
            {item === city && <Arrow width={20} height={19} />}
            {item.toUpperCase()}
          </ListElement>
        ))}
      </List>
    </Modal>
  );
};

export default CitySelectModal;
