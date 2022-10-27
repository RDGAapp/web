import { forwardRef, MouseEvent, ReactNode } from 'react';

import styled from 'styled-components';

const Dialog = styled.dialog`
  width: max-content;
  height: max-content;
  max-height: calc(100vh - 1rem);
  padding: 0;
  overflow: auto;
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
  children: ReactNode;
  onClick: (event: MouseEvent) => void;
  onClose?: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ children, onClick, onClose }, ref) => (
    <Dialog ref={ref} onClick={onClick} onClose={onClose}>
      <Container>{children}</Container>
    </Dialog>
  )
);

export default Modal;
