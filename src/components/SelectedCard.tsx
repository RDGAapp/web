import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Card = styled(motion.div)`
  display: flex;
  flex: 1 0 30%;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  height: 80vh;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 2rem;
  box-shadow: 0 0 0 150vw ${({ theme }) => theme.colors.black}80;
`;

interface Props {
  selected: Player,
  resetSelected: () => void,
}

const SelectedCard = ({ selected, resetSelected }: Props) => (
  <Container onClick={resetSelected}>
    <Card layoutId={selected.rdgaNumber.toString()} onClick={(e) => e.stopPropagation()}>
      <h3>{`${selected.name} ${selected.surname || ''}`}</h3>
    </Card>
  </Container>
);

export default SelectedCard;
