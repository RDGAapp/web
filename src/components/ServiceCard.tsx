import styled from 'styled-components';

const Container = styled.div`
  width: 11rem;
  margin: auto;
  padding-bottom: 1rem;
  border-radius: 1rem;
`;

const Header = styled.img`
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
`;

interface Props {
  img: string,
  number: number,
  rating?: number | null,
}

const ServiceCard = ({ img, number, rating = 0 }: Props) => (
  <Container>
    <Header src={img} />
    <p>
      {`#${number}`}
    </p>
    {rating && (
    <p>
      {`Рейтинг: ${rating}`}
    </p>
    )}
  </Container>
);

export default ServiceCard;
