import styled from 'styled-components';
import { ReactComponent as Place } from 'assets/place.svg';
import { ReactComponent as Select } from 'assets/select.svg';
import useCity from 'helpers/useCity';

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  border: 1px solid black;
  border-radius: 40px;
  gap: 20px;
  padding: 12px 20px;
  margin-bottom: 12px;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

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
      <Place />
      {(city || 'Выберите город').toUpperCase()}
      <Select />
    </Button>
  );
};

export default CitySelect;
