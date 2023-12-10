import { createSlice } from '@reduxjs/toolkit';

import { getPlayers } from 'store/players/thunks';

import { Paginated } from '../../@types/paginated';
import { Player } from '../../@types/player';

interface PlayerState {
  players: Paginated<Player[]> | null;
  loading: boolean;
  error: string | null;
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    players: null,
    loading: false,
    error: null,
  } as PlayerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlayers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.loading = false;
        state.players = action.payload;
      })
      .addCase(getPlayers.rejected, (state, action) => {
        state.loading = false;
        state.players = null;
        state.error = action.payload as string;
      })
      .addDefaultCase(() => {
        /* do nothing */
      });
  },
});

export default playerSlice.reducer;
