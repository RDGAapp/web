import { useState } from 'react';

import { getPost, updatePost } from 'api';
import Breadcrumbs from 'components/Breadcrumbs';
import PostCard from 'pages/Blog/PostCard';
import { IPost } from 'types/blog';

import AdminFormLayout from '../common/AdminFormLayout';

const UpdateBlog = () => {
  const [code, setCode] = useState('');
  const [header, setHeader] = useState('');
  const [initialText, setInitialText] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState<string | null>(null);
  const [authorRdgaNumber, setAuthorRdgaNumber] = useState<number>(0);

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

  const post = {
    header,
    text,
    author,
    authorRdgaNumber: Number(authorRdgaNumber),
  };

  const getBlogByCode = async () => {
    const response = await getPost(code);
    const json = (await response.json()) as IPost;
    setHeader(json.header);
    setInitialText(json.text);
    setText(json.text);
    setAuthor(json.author);
    setAuthorRdgaNumber(json.authorRdgaNumber);

    return response;
  };

  const onSubmit = async () => updatePost(post, code);

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
            <PostCard
              post={{
                ...post,
                code,
                createdAt: new Date().toISOString(),
                authorAvatarUrl: 'https://rdga.ru/files/cherkasik/mem.webp',
                authorName: 'Name',
                authorSurname: 'Surname',
              }}
              linkedHeader
            />
          </div>
        }
      />
    </>
  );
};

export default UpdateBlog;
