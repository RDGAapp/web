import { createSlice } from '@reduxjs/toolkit';

import tournaments from 'store/tournaments/mockData';

interface TournamentsState {
  tournaments: Tournament[],
}

const tournamentsSlice = createSlice({
  name: 'tournament',
  initialState: {
    tournaments,
  } as TournamentsState,
  reducers: {},
});

export default tournamentsSlice.reducer;
