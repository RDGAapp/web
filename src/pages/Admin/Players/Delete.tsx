import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import { deletePlayer } from 'helpers/api';
import AdminFormLayout from 'pages/Admin/common/AdminFormLayout';

const DeletePlayer = (): JSX.Element => {
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
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Удаление игрока'
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default DeletePlayer;
