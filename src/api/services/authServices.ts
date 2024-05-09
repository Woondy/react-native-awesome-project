import apiClient from "../apiClient";
import { LoginRequest } from "../../types";

export const loginService = async (credentials: LoginRequest) => {
  const response = await apiClient.post('/login', credentials);
  return response;
}

export const refreshTokenService = async (refreshToken: any) => {
  const response = await apiClient.post('/refresh', { refreshToken });
  return response;
}
