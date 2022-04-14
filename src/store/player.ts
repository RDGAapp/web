import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlayers } from 'store/requests/player';

interface PlayerState {
  players: Player[],
  loading: boolean,
  error: string | null,
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    players: [],
    loading: false,
    error: null,
  } as PlayerState,
  reducers: {},
  extraReducers: {
    [getPlayers.pending.type]: (state) => {
      state.loading = true;
      state.players = [];
      state.error = null;
    },

    [getPlayers.fulfilled.type]: (state, action: PayloadAction<Player[]>) => {
      state.loading = false;
      state.players = action.payload;
    },

    [getPlayers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default playerSlice.reducer;
