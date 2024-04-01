import { createSlice } from '@reduxjs/toolkit';

import { getPost, getPosts } from 'store/posts/thunk';
import { IPost } from 'types/blog';

interface PostsState {
  posts: IPost[];
  loading: boolean;
  error: string;
  lastPage: number | null;
  currentPost: IPost | null;
  postLoading: boolean;
  postError: string;
}

const initialState: PostsState = {
  posts: [],
  lastPage: null,
  loading: false,
  error: '',
  currentPost: null,
  postLoading: false,
  postError: '',
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
        state.error = '';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.data];
        state.lastPage = action.payload.pagination.lastPage;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message ?? '';
      })
      .addCase(getPost.pending, (state) => {
        state.postLoading = true;
        state.postError = '';
        state.currentPost = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.postLoading = false;
        state.currentPost = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.postLoading = false;
        state.currentPost = null;
        state.postError = action.error.message ?? '';
      });
  },
});

export default postsSlice.reducer;
