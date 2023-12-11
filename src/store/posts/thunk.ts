import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

import { Post } from '../../@types/blog';

export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (_, { rejectWithValue }) => {
    const response = await api.getPosts();

    if (response.ok) {
      const json: Post[] = await response.json();
      return json;
    }

    const errorMessage = await response.text();
    return rejectWithValue(errorMessage);
  },
);

export const getPost = createAsyncThunk('posts/getOne', async () => {
  // do nothing
});
