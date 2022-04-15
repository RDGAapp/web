import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from 'assets/cross.svg';
import { ReactComponent as ChartSvg } from 'assets/chart.svg';
import { ReactComponent as LocationSvg } from 'assets/location.svg';
import Avatar from 'components/Avatar';
import ServiceCard from 'components/ServiceCard';
import MetrixImg from 'assets/metrix.png';
import PdgaImg from 'assets/pdga.png';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2rem);
  height: 100%;
  padding: 0 1rem;
`;

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 30rem;
  max-height: 80vh;
  overflow-y: scroll;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 2rem;
  box-shadow: 0 0 0 200vw ${({ theme }) => theme.colors.black}80;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  width: calc(100% - 2rem);
  margin: 0;
  padding: 1.5rem 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.yellow};

  h2 {
    margin: 0;
    padding: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  svg {
    width: 1rem;
    fill: currentColor;
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: calc(100% - 4rem);
  padding: 1rem 2rem 1.5rem;
`;

const InfoLine = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  line-height: 2rem;

  svg {
    width: 2rem;
  }

  p {
    margin: 0;
  }
`;

const CardsLine = styled(InfoLine)`
  flex-wrap: wrap;
  justify-content: center;
`;

interface Props {
  selected: Player,
  resetSelected: () => void,
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
      <Card layoutId={selected.rdgaNumber.toString()} onClick={(e) => e.stopPropagation()}>
        <Header>
          <div>
            <Avatar />
          </div>
          <h2>{`${selected.name} ${selected.surname || ''}`}</h2>
          <h2>{`#${selected.rdgaNumber}`}</h2>
          <CloseButton onClick={resetSelected}>
            <CloseSvg />
          </CloseButton>
        </Header>
        <InfoContainer>
          {selected.rdgaRating
            ? (
              <InfoLine>
                <ChartSvg />
                <p>{`Рейтинг: ${selected.rdgaRating}`}</p>
              </InfoLine>
            )
            : ''}
          {selected.town
            ? (
              <InfoLine>
                <LocationSvg />
                <p>{`Город: ${selected.town}`}</p>
              </InfoLine>
            )
            : ''}
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
