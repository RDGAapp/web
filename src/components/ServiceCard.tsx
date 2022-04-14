import styled from 'styled-components';

const Container = styled.div`
  width: 11rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
`;

const Header = styled.img`
  width: 100%;
  height: 4rem;
`;

const Info = styled.p`
  padding: 0 1rem;
`;

interface Props {
  img: string,
  number: number,
  rating?: number | null,
}

const ServiceCard = ({ img, number, rating }: Props) => (
  <Container>
    <Header src={img} />
    <Info>
      {`#${number}`}
    </Info>
    {rating && (
    <Info>
      {`Рейтинг: ${rating}`}
    </Info>
    )}
  </Container>
);

ServiceCard.defaultProps = {
  rating: 0,
};

export default ServiceCard;
