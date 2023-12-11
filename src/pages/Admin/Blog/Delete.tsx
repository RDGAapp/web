import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import { deletePost } from 'helpers/api';

import AdminFormLayout from '../common/AdminFormLayout';

const DeleteBlog = () => {
  const [code, setCode] = useState('');

  const inputs = [
    {
      value: code,
      onChange: setCode,
      label: 'Код',
      type: 'string',
      required: true,
    },
  ];

  const onSubmit = async () => deletePost(code);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Удаление поста'
        actionNames={['Удаление поста']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
      />
    </>
  );
};

export default DeleteBlog;
