import { ReactNode, useRef } from 'react';

import Modal from 'components/Modal';

interface IUseDialog {
  headerText?: string;
  onClose?: () => void;
}

const useDialog = ({ headerText, onClose }: IUseDialog) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return {
    Dialog: ({ children }: { children: ReactNode }) => (
      <Modal
        ref={dialogRef}
        headerText={headerText}
        onClick={(event) => {
          event.stopPropagation();
          if ((event.target as HTMLElement).tagName === 'DIALOG')
            dialogRef.current?.close();
        }}
        onClose={onClose}
      >
        {children}
      </Modal>
    ),
    openModal: () => dialogRef.current?.showModal(),
    closeModal: () => dialogRef.current?.close(),
  };
};

export default useDialog;
