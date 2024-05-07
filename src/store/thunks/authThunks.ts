import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest, LoginResponse } from '../../types';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }: LoginRequest) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data: LoginResponse = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async (_) => {
    try {
      //
    } catch (error) {
      throw error;
    }
  }
);
