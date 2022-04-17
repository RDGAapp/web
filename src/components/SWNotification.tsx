import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: fixed;
  top: -3rem;
  left: 50%;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: max-content;
  max-width: calc(80vw - 3rem);
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 2rem;
  transform: translateX(-50%);
  transition: all 1s ease-in-out;
  opacity: 0;
  
  [open] {
    top: 1.5rem;
    opacity: 1;
  }
`;

const SWNotification = () => (
  <Container id="reloadNotification">
    Newer version is available! Please, refresh the page.
  </Container>
);

export default SWNotification;
