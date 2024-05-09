import axios, { AxiosInstance } from 'axios';
import { store } from '../store/store';
import { logoutAsync, refreshTokenAsync } from '../store/thunks/authThunks';
import { getAccessToken } from '../store/selectors/authSelectors';

const apiClient: AxiosInstance = axios.create({
  baseURL: '/api',
});

apiClient.interceptors.request.use(
  async function (config) {
    try {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error('Error getting access token:', error);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => response,
  async function (error) {
    const originalRequest = error.config;
    const refreshTokenUrl = '/refresh';
    
    if (error.response && error.response.status === 401) {
      if (originalRequest.url === refreshTokenUrl || originalRequest.isRetry) {
        await handleLogout();
        return Promise.reject(new Error('Refresh token failed'));
      } else {
        return handleRefreshToken(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

async function handleLogout() {
  await store.dispatch(logoutAsync());
}

async function handleRefreshToken(originalRequest: any) {
  try {
    await store.dispatch(refreshTokenAsync());
    const newToken = getAccessToken();
    if (newToken) {
      originalRequest.isRetry = true;
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return apiClient(originalRequest);
    } else {
      await handleLogout();
      return Promise.reject(new Error('Refresh token failed to obtain new token'));
    }
  } catch (refreshError) {
    await handleLogout();
    return Promise.reject(new Error('Refresh token failed'));
  }
}

export default apiClient;
