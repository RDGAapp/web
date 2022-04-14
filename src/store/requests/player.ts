import { createAsyncThunk } from '@reduxjs/toolkit';
import getApiUrl from 'helpers/getApiUrl';

export const getPlayers = createAsyncThunk(
  'player/getAll',
  async () => {
    const response = await fetch(getApiUrl('/players'));

    const json = await response.json();

    return json;
  },
);

export const getPlayer = async () => null;
