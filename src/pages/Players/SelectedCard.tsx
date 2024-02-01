import { useEffect } from 'react';

import styled from 'styled-components';

import { ReactComponent as ChartSvg } from 'assets/icons/chart.svg';
import MetrixImg from 'assets/images/metrix.webp';
import PdgaImg from 'assets/images/pdga.webp';
import ServiceCard from 'components/ServiceCard';
import { IPlayer } from 'types/player';

import RatingChangeBadge from '../../components/RatingChangeBadge';

const Container = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.selectedPlayerCard};
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const Card = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;

  max-width: 30rem;
  max-height: 80vh;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 2rem;
  box-shadow: 0 0 0 200vw ${({ theme }) => theme.colors.backdrop};
`;

const Header = styled.div`
  isolation: isolate;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  width: 100%;
  padding: 1.5rem 1rem 1rem;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.primary};
`;

const RdgaNumber = styled.p`
  pointer-events: none;

  position: absolute;
  z-index: -1;
  top: 50%;
  right: 3rem;
  translate: 0 -50%;

  width: fit-content;

  font-size: 5rem;
  font-weight: bolder;
  font-style: italic;
  line-height: 1;
  color: ${({ theme }) => theme.colors.background};
`;

const InfoContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 1rem 2rem 1.5rem;
`;

const InfoLine = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  line-height: 2rem;

  & svg {
    width: 2rem;
  }
`;

const CardsLine = styled(InfoLine)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface Props {
  selected: IPlayer;
  resetSelected: () => void;
}

const SelectedCard = ({ selected, resetSelected }: Props) => {
  const handleEscPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      resetSelected();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress);
    return () => document.removeEventListener('keydown', handleEscPress);
  }, []);

  return (
    <Container onClick={resetSelected}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Header>
          <RdgaNumber>{`#${selected.rdgaNumber}`}</RdgaNumber>
        </Header>
        <InfoContainer>
          {selected.rdgaRating ? (
            <InfoLine>
              <ChartSvg />
              <p>{`Рейтинг: ${selected.rdgaRating}`}</p>
              <RatingChangeBadge
                rating={selected.rdgaRating}
                ratingChange={selected.rdgaRatingChange}
              />
            </InfoLine>
          ) : (
            ''
          )}
          <CardsLine>
            {selected.metrixNumber && (
              <ServiceCard
                img={MetrixImg}
                number={selected.metrixNumber}
                rating={selected.metrixRating}
              />
            )}
            {selected.pdgaNumber && (
              <ServiceCard
                img={PdgaImg}
                number={selected.pdgaNumber}
                rating={selected.pdgaRating}
              />
            )}
          </CardsLine>
        </InfoContainer>
      </Card>
    </Container>
  );
};

export default SelectedCard;
