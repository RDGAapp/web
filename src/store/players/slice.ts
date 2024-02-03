import { createSlice } from '@reduxjs/toolkit';

import { getPlayer, getPlayers } from 'store/players/thunks';
import { IPaginated } from 'types/paginated';
import { IPlayer, IPlayerExtended } from 'types/player';

interface PlayerState {
  players: IPaginated<IPlayer[]> | null;
  player: IPlayerExtended | null;
  loading: boolean;
  error: string | null;
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    players: null,
    player: null,
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
        state.error = action.error.message ?? '';
      })
      .addCase(getPlayer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.player = null;
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.loading = false;
        state.player = action.payload;
      })
      .addCase(getPlayer.rejected, (state, action) => {
        state.loading = false;
        state.player = null;
        state.error = action.error.message ?? '';
      });
  },
});

export default playerSlice.reducer;
