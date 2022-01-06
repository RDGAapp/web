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

interface Props {
  data: DgEvent,
}

const CityEvent = ({ data }: Props): JSX.Element => (
  <>
    <CityHeader>
      <Clock />
      ВРЕМЯ:
    </CityHeader>
    <CityContainer>
      { data.eventData.days.map((day) => <Badge>{ day.toUpperCase() }</Badge>) }
      <Badge>{ data.eventData.time }</Badge>
    </CityContainer>
    <CityHeader>
      <Map />
      МЕСТО:
    </CityHeader>
    <CityContainer>
      <Badge>{ data.eventData.place.town.toUpperCase() }</Badge>
      <Badge>{ data.eventData.place.street.toUpperCase() }</Badge>
      <Badge>{ data.eventData.place.comment.toUpperCase() }</Badge>
    </CityContainer>
  </>
);

export default CityEvent;
