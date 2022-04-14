import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ReactComponent as AvatarSvg } from 'assets/avatar.svg';

const Container = styled(motion.div)`
  display: flex;
  flex: 1 0 25%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 29.5%;
  height: 8rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 2rem;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0 0 0.1rem;
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

const Avatar = styled.div`
  flex: 0;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 100vh;
  box-shadow: 0 0 0.1rem;

  svg {
    width: inherit;
    fill: currentColor;
  }
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 4rem);
`;

const MainInformation = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
    <Avatar><AvatarSvg /></Avatar>
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
