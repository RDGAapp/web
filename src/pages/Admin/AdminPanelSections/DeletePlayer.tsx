import { useState } from 'react';

import { deletePlayer } from 'helpers/api';
import AdminFormLayout from 'pages/Admin/AdminPanelSections/AdminFormLayout';

interface DeletePlayerProps {
  onClose: () => void;
}

const DeletePlayer = ({ onClose }: DeletePlayerProps): JSX.Element => {
  const [rdgaNumber, setRdgaNumber] = useState('');

  const inputs = [
    {
      value: rdgaNumber,
      onChange: setRdgaNumber,
      label: 'Номер РДГА',
      type: 'number',
      required: true,
    },
  ];

  const onSubmit = () => deletePlayer(Number(rdgaNumber));

  return (
    <AdminFormLayout
      header='Удаление игрока'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default DeletePlayer;
