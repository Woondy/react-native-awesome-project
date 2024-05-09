import { createSlice } from '@reduxjs/toolkit';
import { loginAsync, logoutAsync, refreshTokenAsync } from '../thunks/authThunks';
import { User } from '../../types';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        Object.assign(state, initialState);
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken } = action.payload;
        state.isLoggedIn = true;
        state.user = user;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.error.message || 'Login failed';
      })
      .addCase(refreshTokenAsync.fulfilled, (state, action) => {
        const { accessToken } = action.payload;
        state.accessToken = accessToken;
      })
      .addCase(refreshTokenAsync.rejected, (state, action) => {
        state.error = action.error.message || 'Refresh Token failed';
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        Object.assign(state, initialState);
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        console.error('Logout failed:', action.error);
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
