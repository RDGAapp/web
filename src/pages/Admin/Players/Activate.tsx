import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import { activatePlayer } from 'helpers/api';

import AdminFormLayout from '../common/AdminFormLayout';

const ActivatePlayer = () => {
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
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Активировать'
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default ActivatePlayer;
