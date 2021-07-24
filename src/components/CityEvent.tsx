import styled from 'styled-components';
import { ReactComponent as Clock } from '../assets/clock.svg';
import { ReactComponent as Map } from '../assets/map.svg';

const CityHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  gap: 14px;
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 10px;
`;

const Badge = styled.div`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  border: 1px solid black;
  border-radius: 40px;
  padding: 12px 20px;
`;

const CityEvent = (): JSX.Element => (
  <>
    <CityHeader>
      <Clock />
      ВРЕМЯ:
    </CityHeader>
    <CityContainer>
      <Badge>ПТ</Badge>
      <Badge>СБ</Badge>
      <Badge>ВС</Badge>
      <Badge>18:00</Badge>
    </CityContainer>
    <CityHeader>
      <Map />
      МЕСТО:
    </CityHeader>
    <CityContainer>
      <Badge>СЕСТРОРЕЦК</Badge>
      <Badge>КУРОРТНАЯ УЛИЦА, 27</Badge>
      <Badge>ШИКАРНЫЙ ГАЗОН У ЗАПРАВКИ ЛУКОЙЛ</Badge>
    </CityContainer>
  </>
);

export default CityEvent;
