import { ReactNode, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';

const Modal = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.backdrop};
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: max-content;
  max-width: 90vw;
  height: max-content;
  max-height: 90vh;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
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

const ModalContentContainer = styled.div`
  overflow-y: auto;
`;

interface IUseDialog {
  headerText?: string;
  onClose?: () => void;
}

const useDialog = ({ headerText, onClose }: IUseDialog) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [shouldChangeBodyStyle, setShouldChangeBodyStyle] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShouldChangeBodyStyle(true);
      return;
    }

    if (!shouldChangeBodyStyle) return;

    document.body.style.overflow = 'auto';
    setShouldChangeBodyStyle(false);
    onClose?.();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();
  }, [dialogRef.current]);

  return {
    Dialog: ({ children }: { children: ReactNode }) =>
      isOpen
        ? createPortal(
            <Modal
              ref={dialogRef}
              tabIndex={0}
              onClick={(event) => {
                event.stopPropagation();
                if (event.target === dialogRef.current) setIsOpen(false);
              }}
              onKeyDown={(event) => {
                event.stopPropagation();
                if (event.key === 'Escape') {
                  setIsOpen(false);
                }
              }}
            >
              <ModalContainer>
                {headerText && (
                  <ModalHeader>
                    <h1>{headerText}</h1>
                    <CrossSvg
                      height={17}
                      width={17}
                      onClick={() => setIsOpen(false)}
                    />
                  </ModalHeader>
                )}
                <ModalContentContainer>{children}</ModalContentContainer>
              </ModalContainer>
            </Modal>,
            document.body,
          )
        : null,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  };
};

export default useDialog;
