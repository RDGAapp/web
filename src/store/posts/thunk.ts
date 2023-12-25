import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

import { Post } from '../../@types/blog';
import { Paginated } from '../../@types/paginated';

export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (page: number, { rejectWithValue }) => {
    const response = await api.getPosts(page);

    if (response.ok) {
      const json = (await response.json()) as Paginated<Post[]>;
      return json;
    }

    const errorMessage = await response.text();
    return rejectWithValue(errorMessage);
  },
);

export const getPost = createAsyncThunk('posts/getOne', async () => {
  // do nothing
});
