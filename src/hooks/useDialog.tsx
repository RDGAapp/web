import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

// * wait 4 better times
// import Modal from 'components/Modal';

const OldModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backdrop};
`;

const OldModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: auto;
  max-width: 90vw;
  height: max-content;
  max-height: 90vh;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
`;

const useDialog = (onClose?: () => void) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // * wait 4 better times
  // if (typeof HTMLDialogElement !== 'function') {
  //   return {
  //     Dialog: ({ children }: { children: ReactNode }) => (
  //       <Modal
  //         ref={dialogRef}
  //         onClick={(event) => {
  //           event.stopPropagation();
  //           if ((event.target as HTMLElement).tagName === 'DIALOG')
  //             dialogRef.current?.close();
  //         }}
  //         onClose={onClose}
  //       >
  //         {children}
  //       </Modal>
  //     ),
  //     openModal: () => dialogRef.current?.showModal(),
  //     closeModal: () => dialogRef.current?.close(),
  //   };
  // }

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
    onClose?.();
  }, [isOpen]);

  return {
    Dialog: ({ children }: { children: ReactNode }) =>
      isOpen ? (
        <OldModal
          ref={dialogRef as unknown as RefObject<HTMLDivElement>}
          id='old_modal'
          tabIndex={0}
          onClick={(event) => {
            event.stopPropagation();
            if ((event.target as HTMLElement).id === 'old_modal')
              setIsOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setIsOpen(false);
            }
          }}
        >
          <OldModalContainer>{children}</OldModalContainer>
        </OldModal>
      ) : null,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  };
};

export default useDialog;
