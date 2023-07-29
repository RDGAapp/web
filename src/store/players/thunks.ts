import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';

interface GetPlayersPayload {
  pageNumber: number;
  surname?: string;
  town?: Town;
  onlyActive?: boolean;
}

export const getPlayers = createAsyncThunk(
  'player/getAll',
  async (
    { pageNumber, surname, town, onlyActive }: GetPlayersPayload,
    { rejectWithValue }
  ) => {
    const response = await api.getPlayers(
      pageNumber,
      surname,
      town,
      onlyActive
    );

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    const errorMessage = await response.text();
    return rejectWithValue(errorMessage);
  }
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
  }
);
