import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playerSlice from 'store/player';

const rootReducer = combineReducers({
  player: playerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
