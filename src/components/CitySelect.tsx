import { useContext } from 'react';

import styled from 'styled-components';

import { ReactComponent as PlaceSvg } from 'assets/icons/place.svg';
import { ReactComponent as SelectSvg } from 'assets/icons/select.svg';
import { CityContext } from 'hooks/CityContext';

const Button = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: max-content;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    height: 1.2rem;
  }
`;

interface CitySelectProps {
  onClick: () => void,
}

const CitySelect = ({ onClick }: CitySelectProps): JSX.Element => {
  const { city } = useContext(CityContext);

  return (
    <Button onClick={onClick}>
      <PlaceSvg />
      {(city || 'Выберите город').toUpperCase()}
      <SelectSvg />
    </Button>
  );
};

export default CitySelect;
