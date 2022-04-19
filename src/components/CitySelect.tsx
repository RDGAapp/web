import { ReactComponent as PlaceSvg } from 'assets/place.svg';
import { ReactComponent as SelectSvg } from 'assets/select.svg';
import styled from 'styled-components';
import useCity from 'helpers/useCity';

const Button = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: max-content;
  padding: 0.6rem 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  background: none;
  border: 1px solid black;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

interface CitySelectProps {
  onClick: () => void,
}

const CitySelect = ({ onClick }: CitySelectProps): JSX.Element => {
  const city = useCity();
  return (
    <Button onClick={onClick}>
      <PlaceSvg />
      {(city || 'Выберите город').toUpperCase()}
      <SelectSvg />
    </Button>
  );
};

export default CitySelect;
