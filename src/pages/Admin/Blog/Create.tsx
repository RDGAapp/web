import { useState } from 'react';

import { createPost } from 'api';
import Breadcrumbs from 'components/Breadcrumbs';
import PostCard from 'pages/Blog/PostCard';
import { IPostBase } from 'types/blog';

import AdminFormLayout from '../common/AdminFormLayout';

const CreateBlog = () => {
  const [code, setCode] = useState('');
  const [header, setHeader] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [authorRdgaNumber, setAuthorRdgaNumber] = useState<number>(0);

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
      value: '',
      onChange: setText,
      label: 'Текст',
      type: 'tinymce',
      required: true,
    },
    {
      value: author,
      onChange: setAuthor,
      label: 'Псевдоним автора',
      type: 'text',
    },
    {
      value: authorRdgaNumber,
      onChange: setAuthorRdgaNumber,
      label: 'Номер РДГА автора',
      type: 'number',
      required: true,
    },
  ];

  const post: IPostBase = {
    code,
    header,
    text,
    author,
    authorRdgaNumber: Number(authorRdgaNumber),
    createdAt: new Date().toISOString(),
  };

  const onSubmit = async () => createPost(post);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Создание пост'
        actionNames={['Создание пост']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
        preview={
          <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <PostCard
              post={{
                ...post,
                createdAt: new Date().toISOString(),
                authorAvatarUrl: 'https://rdga.ru/files/cherkasik/mem.webp',
                authorName: 'Name',
                authorSurname: 'Surname',
              }}
            />
          </div>
        }
      />
    </>
  );
};

export default CreateBlog;
