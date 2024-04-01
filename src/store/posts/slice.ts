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
        // state.posts = [];
        state.posts = [
          {
            code: 'fools_day2024',
            header: 'Всему хорошему приходит конец',
            text: '<p>Каждый человек когда-то понимает, что приходит время двигаться дальше.</p>\n<p><img src="https://rdga.ru/files/cherkasik/tired.webp" alt="" loading="lazy"></p>\n<p>Для кого-то это смена работа, для кого-то новый диск, смена прически или переезд в другую страну. К сожалению, мое свободное время и желание сказало, что пришло время двигаться дальше.<br>Через пару дней я отключу сайт, всем спасибо за поддержку и отзывы, какими бы они ни были❤️<br><br></p>\n<h3>Что, поверили?) С 1 апреля, дурашки😅<br><img src="https://rdga.ru/files/cherkasik/clown.webp" alt="" loading="lazy"></h3>',
            author: 'Создатель',
            createdAt: '2024-04-01T08:42:30.431Z',
            authorRdgaNumber: 24,
            authorName: 'Илья',
            authorSurname: 'Черкасов',
            authorAvatarUrl:
              'https://t.me/i/userpic/320/sj36KIyWNmxgjXt4QEGzPK4WOQS0YNz9hpNDh-Gorv0.jpg',
          },
          {
            code: 'fools_day2024_2',
            header: 'Всему хорошему приходит конец',
            text: '<p>Каждый человек когда-то понимает, что приходит время двигаться дальше.</p>\n<p>Для кого-то это смена работа, для кого-то новый диск, смена прически или переезд в другую страну. К сожалению, мое свободное время и желание сказало, что пришло время двигаться дальше.<br>Через пару дней я отключу сайт, всем спасибо за поддержку и отзывы, какими бы они ни были❤️<br><br></p>\n<h3>Что, поверили?) С 1 апреля, дурашки😅<br></h3>',
            author: 'Создатель',
            createdAt: '2024-04-01T08:42:30.431Z',
            authorRdgaNumber: 24,
            authorName: 'Илья',
            authorSurname: 'Черкасов',
            authorAvatarUrl:
              'https://t.me/i/userpic/320/sj36KIyWNmxgjXt4QEGzPK4WOQS0YNz9hpNDh-Gorv0.jpg',
          },
        ];
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
