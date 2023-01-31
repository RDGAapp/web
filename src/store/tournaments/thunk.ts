import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

export const getTournaments = createAsyncThunk(
  'tournaments/getAll',
  async (_, { rejectWithValue }) => {
    const response = await api.getTournaments();

    if (response.ok) {
      const json: Tournament[] = await response.json();
      return json;
    }

    const errorMessage = await response.text();
    return rejectWithValue(errorMessage);
  }
);

export const getTournament = createAsyncThunk(
  'tournaments/getOne',
  async () => {
    // do nothing
  }
);