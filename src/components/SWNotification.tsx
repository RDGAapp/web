import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: -10rem;
  left: 50%;
  z-index: ${({ theme }) => theme.zIndex.swNotification};
  width: max-content;
  max-width: 80vw;
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 1s ease-in-out;
`;

const SWNotification = () => (
  <Container id="reloadNotification">
    Доступна более новая версия сайта! Пожалуйста, обновите страницу.
  </Container>
);

export default SWNotification;
