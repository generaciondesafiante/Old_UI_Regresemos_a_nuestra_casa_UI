import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    user: {},

    errorMessage: undefined,
  },

  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },

    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },

    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload;
    },
    onCheckUserExistenceSuccess: (state, { uid, email }) => {
      state.status = 'authenticatedCheck';
      state.user = { uid, email };
      state.errorMessage = undefined;
    },

    onCheckUserExistenceFailure: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
  onCheckUserExistenceSuccess,
  onCheckUserExistenceFailure,
} = authSlice.actions;
