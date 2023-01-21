import { createSlice } from '@reduxjs/toolkit';

import { getTournaments } from 'store/tournaments/thunk';

interface TournamentsState {
  tournaments: Tournament[];
  loading: boolean;
  error: string | null;
}

const initialState: TournamentsState = {
  tournaments: [],
  loading: false,
  error: null,
};

const tournamentsSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTournaments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTournaments.fulfilled, (state, action) => {
        state.loading = false;
        state.tournaments = action.payload;
      })
      .addCase(getTournaments.rejected, (state, action) => {
        state.loading = false;
        state.tournaments = [];
        state.error = action.payload as string;
      })
      .addDefaultCase(() => {
        /* do nothing */
      });
  },
});

export default tournamentsSlice.reducer;
