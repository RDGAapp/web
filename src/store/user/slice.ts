import { createSlice } from '@reduxjs/toolkit';

import extraReducers from './extraReducers';
import { UserState } from './types';

const initialState: UserState = {
  user: null,
  loading: false,
  registering: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers,
});

export default userSlice.reducer;
