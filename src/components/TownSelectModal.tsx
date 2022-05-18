import 'react-responsive-modal/styles.css';
import { useContext } from 'react';

import { Modal } from 'react-responsive-modal';
import styled, { css } from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import towns from 'helpers/townsList';
import { TownContext } from 'hooks/TownContext';

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

interface TownSelectModalProps {
  isOpen: boolean,
  onClose: () => void,
}

const TownSelectModal = ({ isOpen, onClose }: TownSelectModalProps): JSX.Element => {
  const { town, changeTown } = useContext(TownContext);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{
        modal: {
          borderRadius: '2rem',
          width: '90%',
          maxWidth: '23rem',
          padding: '1.5rem 2.5rem',
        },
        modalContainer: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        },
      }}
      animationDuration={0}
    >
      <Header>
        {'Выберите город'.toUpperCase()}
        <CrossSvg height={17} onClick={onClose} />
      </Header>
      <List>
        {!town && (
        <ListElement selected>
          <ArrowSvg width={20} height={19} />
          {'Город не выбран'.toUpperCase()}
        </ListElement>
        )}
        {towns.map((item) => (
          <ListElement
            key={item}
            selected={item === town}
            onClick={() => {
              changeTown(item);
              onClose();
            }}
          >
            {item === town && <ArrowSvg width={20} height={19} />}
            {item.toUpperCase()}
          </ListElement>
        ))}
      </List>
    </Modal>
  );
};

export default TownSelectModal;
