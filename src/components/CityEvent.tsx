import { ReactComponent as Clock } from 'assets/clock.svg';
import { ReactComponent as Map } from 'assets/map.svg';
import PlaceholderImg from 'assets/calendar.jpg';
import Text from 'components/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
`;

const CityHeader = styled.h5`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
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

const Calendar = styled.img`
  width: 100%;
`;

interface Props {
  data: DgEvent | null,
  header: string,
}

const CityEvent = ({ data, header }: Props): JSX.Element => {
  if (data) {
    return (
      <Container>
        <Header>
          {header.toUpperCase()}
        </Header>
        <CityHeader>
          <Clock />
          ВРЕМЯ:
        </CityHeader>
        <CityContainer>
          { data.days.map((day) => <Badge key={day}>{ day.toUpperCase() }</Badge>) }
          <Badge>{ data.time }</Badge>
        </CityContainer>
        <CityHeader>
          <Map />
          МЕСТО:
        </CityHeader>
        <CityContainer>
          <Badge>{ data.place.town.toUpperCase() }</Badge>
          <Badge>{ data.place.street.toUpperCase() }</Badge>
          <Badge>{ data.place.comment.toUpperCase() }</Badge>
        </CityContainer>
      </Container>
    );
  }

  return (
    <>
      <Calendar src={PlaceholderImg} alt="Календарь на сезон" />
      <Text>
        Для более подробной информации свяжитесь с нами любым из способов, указанных ниже.
      </Text>
    </>
  );
};

export default CityEvent;
