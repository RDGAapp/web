import { useState } from 'react';

import AdminFormLayout from 'components/Dialogs/AdminPanelSections/AdminFormLayout';
import { deletePlayer } from 'helpers/api';

interface UpdateRatingProps {
  onClose: () => void;
}

const UpdateRating = ({ onClose }: UpdateRatingProps): JSX.Element => {
  const [rdgaNumber, setRdgaNumber] = useState('');
  const [playerRating, setPlayerRating] = useState('');

  const inputs = [
    {
      value: rdgaNumber,
      onChange: setRdgaNumber,
      label: 'Номер RDGA',
      type: 'number',
      required: true,
    },
    {
      value: playerRating,
      onChange: setPlayerRating,
      label: 'Новый рейтинг игрока',
      type: 'number',
      required: true,
    },
  ];

  const onSubmit = () => deletePlayer(Number(playerRating));

  return (
    <AdminFormLayout
      header='Обновление рейтинга игрока'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default UpdateRating;
