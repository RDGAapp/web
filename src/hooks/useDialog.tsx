import { useRef } from 'react';

import Modal from 'components/Modal';

const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return {
    Dialog:
    (
      { children }: {children: JSX.Element | JSX.Element[] | string},
    ) => (
      <Modal
        ref={dialogRef}
        onClick={(event) => (event.target as HTMLElement).tagName === 'DIALOG' && dialogRef.current?.close()}
      >
        {children}
      </Modal>
    ),
    openModal: () => dialogRef.current?.showModal(),
    closeModal: () => dialogRef.current?.close(),
  };
};

export default useDialog;
