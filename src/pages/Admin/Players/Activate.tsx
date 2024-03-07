import { useState } from 'react';

import { activatePlayer } from 'api';
import Breadcrumbs from 'components/Breadcrumbs';

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
        actionNames={['Активация игрока']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
      />
    </>
  );
};

export default ActivatePlayer;
