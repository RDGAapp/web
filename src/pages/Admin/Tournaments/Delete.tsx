import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import { deleteTournament } from 'helpers/api';
import AdminFormLayout from 'pages/Admin/common/AdminFormLayout';

const DeleteTournament = (): JSX.Element => {
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
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Удаление турнира'
        actionNames={['Удаление турнира']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
      />
    </>
  );
};

export default DeleteTournament;
