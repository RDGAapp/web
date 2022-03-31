import styled from 'styled-components';
import { ReactComponent as Clock } from '../assets/clock.svg';
import { ReactComponent as Map } from '../assets/map.svg';

const CityHeader = styled.h5`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 24px;
`;

const CityContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px 10px;
  align-items: center;
`;

const Badge = styled.p`
  margin: 0;
  padding: 12px 20px;
  font-weight: 400;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 24px;
  border: 1px solid black;
  border-radius: 40px;
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
      { data.eventData.days.map((day) => <Badge key={day}>{ day.toUpperCase() }</Badge>) }
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
