import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginAsync, logoutAsync } from '../thunks/authThunks';
import { User } from '../../types';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  tokenExpiration: number | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  tokenExpiration: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      const { isLoggedIn, user, accessToken, refreshToken, tokenExpiration, error } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.tokenExpiration = tokenExpiration;
      state.error = error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      const { user, accessToken, refreshToken, tokenExpiration } = action.payload;
      authSlice.caseReducers.setAuthData(state, {
        payload: { isLoggedIn: true, user, accessToken, refreshToken, tokenExpiration, error: null },
        type: 'auth/setAuthData',
      });
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      authSlice.caseReducers.setAuthData(state, {
        payload: { isLoggedIn: false, user: null, accessToken: null, refreshToken: null, tokenExpiration: null, error: action.error.message || 'Login failed' },
        type: 'auth/setAuthData',
      });
    });
    builder.addCase(logoutAsync.fulfilled, (state) => {
      authSlice.caseReducers.setAuthData(state, {
        payload: initialState,
        type: 'auth/setAuthData',
      });
    });
    builder.addCase(logoutAsync.rejected, (state, action) => {
      console.error('Logout failed:', action.error);
    });
  },
});

export const { setAuthData } = authSlice.actions;
export default authSlice.reducer;
