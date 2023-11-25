import { useState } from 'react';

import { activatePlayer } from 'helpers/api';

import AdminFormLayout from './AdminFormLayout';

interface IProps {
  onClose: () => void;
}

const ActivatePlayer = ({ onClose }: IProps) => {
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

  const onSubmit = async () => activatePlayer(Number(rdgaNumber));

  return (
    <AdminFormLayout
      header='Активировать'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default ActivatePlayer;
