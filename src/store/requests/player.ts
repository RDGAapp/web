import { createAsyncThunk } from '@reduxjs/toolkit';

import api from 'helpers/api';

export const getPlayers = createAsyncThunk(
  'player/getAll',
  async (pageNumber: number, { rejectWithValue }) => {
    const response = await api.getPlayers(pageNumber);

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    const errorMessage = await response.text();
    return rejectWithValue(errorMessage);
  },
);

export const getPlayer = createAsyncThunk(
  'player/get',
  async (rdgaNumber: number, { rejectWithValue }) => {
    const response = await api.getPlayer(rdgaNumber);

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    const errorMessage = await response.text();
    return rejectWithValue(errorMessage);
  },
);
