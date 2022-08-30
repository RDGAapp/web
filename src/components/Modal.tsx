import { forwardRef, MouseEvent } from 'react';

import styled from 'styled-components';

const Dialog = styled.dialog`
  width: 90%;
  max-width: 23rem;
  padding: 0;
  border: none;
  border-radius: 2rem;

  ::backdrop {
    background-color: ${({ theme }) => theme.colors.backdrop};
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  padding: 1.5rem;
`;

interface Props {
  children: JSX.Element | JSX.Element[] | string
  onClick: (event: MouseEvent) => void
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ children, onClick }, ref) => (
  <Dialog ref={ref} onClick={onClick}>
    <Container>
      { children }
    </Container>
  </Dialog>
));

export default Modal;
