import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api';
import { IPost } from 'types/blog';
import { IPaginated } from 'types/paginated';

export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (page: number, { getState }) => {
    let from;
    if (page > 1) {
      const state = getState() as { posts: { posts: IPost[] } };
      from = state.posts.posts[0]?.createdAt;
    }
    const response = await api.getPosts(page, from);

    if (response.ok) {
      const json = (await response.json()) as IPaginated<IPost[]>;
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
      return (await response.json()) as IPost;
    }

    throw new Error(await response.text());
  },
);
