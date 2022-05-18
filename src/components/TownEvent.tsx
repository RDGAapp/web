import styled from 'styled-components';

import { ReactComponent as ClockSvg } from 'assets/icons/clock.svg';
import { ReactComponent as MapSvg } from 'assets/icons/map.svg';
import PlaceholderImg from 'assets/images/calendar.webp';
import Text from 'components/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
`;

const Subheader = styled.h5`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1;
`;

const Description = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem 0.5rem;
  align-items: center;
`;

const Badge = styled.p`
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  line-height: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
`;

const Calendar = styled.img`
  width: 100%;
`;

interface Props {
  data: DgEvent | null,
  header: string,
}

const TownEvent = ({ data, header }: Props): JSX.Element => {
  if (data) {
    return (
      <Container>
        <Header>
          {header.toUpperCase()}
        </Header>
        <Subheader>
          <ClockSvg height={20} />
          ВРЕМЯ:
        </Subheader>
        <Description>
          { data.days.map((day) => <Badge key={day}>{ day.toUpperCase() }</Badge>) }
          <Badge>{ data.time }</Badge>
        </Description>
        <Subheader>
          <MapSvg height={20} />
          МЕСТО:
        </Subheader>
        <Description>
          <Badge>{ data.place.town.toUpperCase() }</Badge>
          <Badge>{ data.place.street.toUpperCase() }</Badge>
          <Badge>{ data.place.comment.toUpperCase() }</Badge>
        </Description>
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

export default TownEvent;
