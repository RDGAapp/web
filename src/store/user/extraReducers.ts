import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { authorize, login, logout, register } from './thunk';
import { UserState } from './types';

const loginReducers = (builder: ActionReducerMapBuilder<UserState>) =>
  builder
    .addCase(login.pending, (state) => {
      state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      action.meta.arg.callback();
      state.loading = false;
      if (!action.payload) return;

      state.user = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      console.error(action.error);
      toast.error(`Что-то пошло не так, повторите позже`);

      state.loading = false;
    });

const logoutReducers = (builder: ActionReducerMapBuilder<UserState>) =>
  builder
    .addCase(logout.pending, (state) => {
      state.loading = true;
    })
    .addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    })
    .addCase(logout.rejected, (state, action) => {
      console.error(action.error);
      toast.error(`Что-то пошло не так, повторите позже`);

      state.loading = false;
    });

const registerReducers = (builder: ActionReducerMapBuilder<UserState>) =>
  builder
    .addCase(register.pending, (state) => {
      state.registering = true;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.registering = false;
      if (!action.payload) return;

      state.user = action.payload;
      action.meta.arg.callback();
    })
    .addCase(register.rejected, (state, action) => {
      state.registering = false;

      console.error(action.error);
      toast.error(`Что-то пошло не так, повторите позже`);
    });

const authorizeReducers = (builder: ActionReducerMapBuilder<UserState>) =>
  builder
    .addCase(authorize.pending, (state) => {
      state.loading = true;
    })
    .addCase(authorize.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(authorize.rejected, (state) => {
      state.loading = false;
    });

export default (builder: ActionReducerMapBuilder<UserState>) => {
  loginReducers(builder);
  logoutReducers(builder);
  registerReducers(builder);
  authorizeReducers(builder);

  return builder;
};
