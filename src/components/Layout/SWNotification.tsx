import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;

  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.swNotification};
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  max-width: 80vw;
  padding: 0.5rem 1.5rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  opacity: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid currentColor;
  border-radius: 2rem;

  transition: all 1s ease-in-out;
`;

const SWNotification = () => (
  <Container id="reloadNotification" onClick={() => window.location.reload()}>
    Доступна более новая версия сайта! Нажмите для обновления.
  </Container>
);

export default SWNotification;
