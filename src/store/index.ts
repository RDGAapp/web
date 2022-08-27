import { combineReducers, configureStore } from '@reduxjs/toolkit';

import playerSlice from 'store/players/slice';
import tournamentSlice from 'store/tournaments/slice';

const rootReducer = combineReducers({
  player: playerSlice,
  tournament: tournamentSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
