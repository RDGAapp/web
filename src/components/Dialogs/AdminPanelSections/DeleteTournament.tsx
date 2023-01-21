import { useState } from 'react';

import AdminFormLayout from 'components/Dialogs/AdminPanelSections/AdminFormLayout';
import { deleteTournament } from 'helpers/api';

interface DeleteTournamentProps {
  onClose: () => void;
}

const DeleteTournament = ({ onClose }: DeleteTournamentProps): JSX.Element => {
  const [code, setCode] = useState('');

  const inputs = [
    {
      value: code,
      onChange: setCode,
      label: 'Код турнира',
      type: 'text',
      required: true,
    },
  ];

  const onSubmit = () => deleteTournament(code);

  return (
    <AdminFormLayout
      header='Удаление турнира'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default DeleteTournament;
