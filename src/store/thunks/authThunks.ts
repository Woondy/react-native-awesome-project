import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest } from '../../types';
import { loginService, refreshTokenService } from '../../api/services/authServices';
import { getAsyncThunkErrorMessage } from '../../utils/error';
import { getRefreshToken } from '../selectors/authSelectors';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (credentials: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await loginService(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(getAsyncThunkErrorMessage(error));
    }
  }
);

export const refreshTokenAsync = createAsyncThunk(
  'auth/refreshTokenAsync',
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = getRefreshToken();
      const response = await refreshTokenService(refreshToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(getAsyncThunkErrorMessage(error));
    }
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async (_, { rejectWithValue }) => {
    try {
      // 
    } catch (error) {
      return rejectWithValue(getAsyncThunkErrorMessage(error));
    }
  }
);
