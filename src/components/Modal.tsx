import { forwardRef, MouseEvent, ReactNode, RefObject } from 'react';

import styled from 'styled-components';

import CrossSvg from 'assets/icons/cross.svg?react';

const Dialog = styled.dialog`
  overflow: hidden;

  width: max-content;
  max-width: 90vw;
  height: max-content;
  max-height: 90vh;
  margin: auto;
  padding: 1.5rem;

  color: ${({ theme }) => theme.colors.text.primary};

  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 1rem;

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.backdrop};
  }

  &[open] {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  & svg {
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover,
    &:focus-within {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & h1 {
    overflow: hidden;

    font-size: 1.5rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Container = styled.div`
  overflow-y: auto;
`;

interface IModalProps {
  children: ReactNode;
  headerText?: string;
  onClick?: (event: MouseEvent) => void;
  onClose?: () => void;
}

const Modal = forwardRef<HTMLDialogElement, IModalProps>(function Modal(
  { children, headerText, onClick, onClose },
  ref,
) {
  return (
    <Dialog ref={ref} onClick={onClick} onClose={onClose}>
      {headerText && (
        <ModalHeader>
          <h1>{headerText}</h1>
          <CrossSvg
            height={17}
            width={17}
            onClick={() =>
              (ref as RefObject<HTMLDialogElement>)?.current?.close()
            }
          />
        </ModalHeader>
      )}
      <Container>{children}</Container>
    </Dialog>
  );
});

export default Modal;
