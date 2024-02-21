import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUserBaseInfo } from 'types/user';

interface UserState {
  user: IUserBaseInfo | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserBaseInfo | null>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
