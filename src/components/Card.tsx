import { motion } from 'framer-motion';
import styled from 'styled-components';
import Avatar from 'components/Avatar';

const Container = styled(motion.div)`
  display: flex;
  flex: 1 0 25%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 29.5%;
  height: 8rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  box-shadow: 0 0 0.3rem ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.yellow};
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    flex: 1 0 40%;
    max-width: 44%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex: 1 0 60%;
    max-width: calc(100% - 2rem);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  width: calc(100% - 4rem);
`;

const MainInformation = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AdditionalInformation = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;

interface Props {
  player: Player,
  setSelected: (player: Player) => void,
}

const Card = ({ player, setSelected }: Props) => (
  <Container
    layoutId={player.rdgaNumber.toString()}
    variants={{
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    onClick={() => setSelected(player)}
  >
    <Avatar />
    <TextContainer>
      <MainInformation title={`${player.name} ${player.surname || ''}`}>
        {`${player.name} ${player.surname || ''}`}
      </MainInformation>
      <MainInformation>{`#${player.rdgaNumber}`}</MainInformation>
      {player.rdgaRating
        ? <AdditionalInformation>{`Рейтинг: ${player.rdgaRating}`}</AdditionalInformation>
        : ''}
    </TextContainer>
  </Container>
);

export default Card;
