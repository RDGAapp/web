import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';
import { IPlayerExtended } from 'types/player';
import { TTown } from 'types/town';

interface GetPlayersPayload {
  pageNumber: number;
  surname?: string;
  town?: TTown;
  onlyActive?: boolean;
}

export const getPlayers = createAsyncThunk(
  'player/getAll',
  async ({ pageNumber, surname, town, onlyActive }: GetPlayersPayload) => {
    const response = await api.getPlayers(
      pageNumber,
      surname,
      town,
      onlyActive,
    );

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
  },
);

export const getPlayer = createAsyncThunk(
  'player/get',
  async (rdgaNumber: number) => {
    const response = await api.getPlayer(rdgaNumber);

    if (response.ok) {
      const json = (await response.json()) as IPlayerExtended;
      return json;
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
  },
);
