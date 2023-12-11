import { useState } from 'react';

import { sanitize } from 'dompurify';

import Breadcrumbs from 'components/Breadcrumbs';
import { getPost, updatePost } from 'helpers/api';

import AdminFormLayout from '../common/AdminFormLayout';

const UpdateBlog = () => {
  const [code, setCode] = useState('');
  const [header, setHeader] = useState('');
  const [initialText] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const inputs = [
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

  const post = {
    header,
    text,
    author,
  };

  const onSubmit = async () => getPost(code);

  const getBlogByCode = async () => updatePost(post, code);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Обновление поста'
        actionNames={['Загрузить данные поста', 'Обновление поста']}
        forms={[
          [
            {
              value: code,
              onChange: setCode,
              label: 'Код',
              type: 'string',
              required: true,
            },
          ],
          inputs,
        ]}
        onSubmits={[getBlogByCode, onSubmit]}
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

export default UpdateBlog;
