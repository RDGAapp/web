import styled from 'styled-components';
import { ReactComponent as Place } from 'assets/place.svg';
import { ReactComponent as Select } from 'assets/select.svg';
import useCity from 'helpers/useCity';

const Button = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 24px;
  background: none;
  border: 1px solid black;
  border-radius: 40px;
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
