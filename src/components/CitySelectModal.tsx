import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';
import { ReactComponent as Cross } from 'assets/cross.svg';
import { ReactComponent as Arrow } from 'assets/arrow-right.svg';
import useCity, { changeCity } from '../helpers/useCity';

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px;
  font-weight: 600;
  font-size: 32px;
  font-family: Inter, sans-serif;
  line-height: 32px;

  svg { cursor: pointer; }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ListElement = styled.p<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  font-size: 20px;
  font-family: Inter, sans-serif;
  line-height: 24px;
  transition: all 0.3s ease;
  ${({ selected }) => !selected && `
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  `}

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
  'Псков',
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
          width: '60%',
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
