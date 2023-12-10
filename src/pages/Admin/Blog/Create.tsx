import React, { useState } from 'react';

import { sanitize } from 'dompurify';

import Breadcrumbs from 'components/Breadcrumbs';

import AdminFormLayout from '../common/AdminFormLayout';

const CreateBlog = () => {
  const [code, setCode] = useState('');
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [initialText] = useState('');
  const [author, setAuthor] = useState('');

  const inputs = [
    {
      value: code,
      onChange: setCode,
      label: 'Код',
      type: 'text',
      required: true,
    },
    {
      value: header,
      onChange: setHeader,
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      value: initialText,
      onChange: setText,
      label: 'Текст',
      type: 'tinymce',
      required: true,
    },
    {
      value: author,
      onChange: setAuthor,
      label: 'Автор',
      type: 'text',
      required: true,
    },
  ];

  const onSubmit = async () => fetch('');

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Создание записи'
        actionNames={['Создание записи']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
        preview={
          <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <h1>{header}</h1>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
            />
            <i>©{author}</i>
          </div>
        }
      />
    </>
  );
};

export default CreateBlog;
