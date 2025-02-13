import { useState, type JSX } from 'react';

import { deletePlayer } from 'api';
import Breadcrumbs from 'components/Breadcrumbs';
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
        actionNames={['Удаление игрока']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
      />
    </>
  );
};

export default DeletePlayer;
