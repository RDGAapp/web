import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'helpers/api';
import { ITelegramResponse } from 'types/telegram';

export const authorize = createAsyncThunk('user/authorize', async () =>
  api.authorize(),
);

export const login = createAsyncThunk(
  'users/login',
  async ({
    telegramData,
  }: {
    telegramData: ITelegramResponse;
    callback: () => void;
  }) => api.login(telegramData),
);

export const logout = createAsyncThunk('users/logout', async () =>
  api.logout(),
);

export const register = createAsyncThunk(
  'users/register',
  async ({
    rdgaNumber,
    telegramData,
  }: {
    rdgaNumber: number;
    telegramData: ITelegramResponse;
    callback: () => void;
  }) => api.register(rdgaNumber, telegramData),
);
