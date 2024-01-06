import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

import { Post } from '../../@types/blog';
import { Paginated } from '../../@types/paginated';

export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (page: number) => {
    const response = await api.getPosts(page);

    if (response.ok) {
      const json = (await response.json()) as Paginated<Post[]>;
      return json;
    }

    throw new Error(await response.text());
  },
);

export const getPost = createAsyncThunk(
  'posts/getOne',
  async (code: string) => {
    const response = await api.getPost(code);
    if (response.ok) {
      return (await response.json()) as Post;
    }

    throw new Error(await response.text());
  },
);
