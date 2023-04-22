import { motion } from 'framer-motion';
import styled from 'styled-components';

import Avatar from 'components/Avatar';
import RatingChangeBadge from 'components/RatingChangeBadge';

const Container = styled(motion.button)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  margin: auto;
  padding: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  :active {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  :disabled {
    color: white;
    background-color: #b2b1b1af;
    border: 1px solid grey;
    cursor: not-allowed;
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
  overflow: hidden;
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
  text-align: start;
  text-overflow: ellipsis;
`;

const AdditionalInformation = styled.p`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.8rem;
`;

interface Props {
  player: Player;
  setSelected: (player: Player) => void;
}

const Card = ({ player, setSelected }: Props) => {
  const disabled = player.activeTo < new Date().toISOString();

  return (
    <Container
      layoutId={player.rdgaNumber.toString()}
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      onClick={() => setSelected(player)}
      disabled={disabled}
    >
      <Avatar disabled={disabled} />
      <TextContainer>
        <MainInformation title={`${player.name} ${player.surname || ''}`}>
          {`${player.name} ${player.surname || ''}`}
        </MainInformation>
        <MainInformation>{`#${player.rdgaNumber}`}</MainInformation>
        {player.rdgaRating ? (
          <AdditionalInformation>
            {`Рейтинг: ${player.rdgaRating}`}
            <RatingChangeBadge
              rating={player.rdgaRating}
              ratingChange={player.rdgaRatingChange}
            />
          </AdditionalInformation>
        ) : (
          ''
        )}
      </TextContainer>
    </Container>
  );
};

export default Card;
