import { ReactNode, useMemo, useRef } from 'react';

import Modal from 'components/Modal';

interface IUseDialog {
  headerText?: string;
  onClose?: () => void;
}

const useDialog = ({ headerText, onClose }: IUseDialog) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return useMemo(
    () => ({
      Dialog: ({ children }: { children: ReactNode }) => (
        <Modal
          ref={dialogRef}
          headerText={headerText}
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const isInDialog =
              rect.top <= event.clientY &&
              event.clientY <= rect.top + rect.height &&
              rect.left <= event.clientX &&
              event.clientX <= rect.left + rect.width;
            if (!isInDialog && event.target === event.currentTarget) {
              dialogRef.current?.close();
            }
          }}
          onClose={onClose}
        >
          {children}
        </Modal>
      ),
      openModal: () => dialogRef.current?.showModal(),
      closeModal: () => dialogRef.current?.close(),
    }),
    [],
  );
};

export default useDialog;
