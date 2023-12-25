import { createSlice } from '@reduxjs/toolkit';

import { getPosts } from 'store/posts/thunk';

import { Post } from '../../@types/blog';

interface PostsState {
  posts: Post[];
  loading: boolean;
  lastPage: number | null;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  lastPage: null,
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        if (action.meta.arg === 1) {
          state.posts = [];
        }
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.data];
        state.lastPage = action.payload.pagination.lastPage;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.payload as string;
      });
  },
});

export default postsSlice.reducer;
