import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import towns from 'helpers/townsList';
import { TownContext } from 'hooks/TownContext';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListElement = styled.p<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 1.2rem;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  font-size: 1rem;
  line-height: 1;

  ${({ selected }) =>
    !selected &&
    css`
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    `}

  & svg {
    margin-right: 1rem;
  }
`;

interface TownSelectModalProps {
  onClose: () => void;
}

const TownSelectModal = ({ onClose }: TownSelectModalProps): JSX.Element => {
  const { town, changeTown } = useContext(TownContext);

  return (
    <List>
      {!town && (
        <ListElement selected>
          <ArrowSvg width={20} height={19} />
          Город не выбран
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
          {item}
        </ListElement>
      ))}
    </List>
  );
};

export default TownSelectModal;
