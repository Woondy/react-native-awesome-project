import apiClient from "../apiClient";
import { ENDPOINTS } from "../endpoints";
import { LoginRequest } from "../../types";

export const loginService = async (credentials: LoginRequest) => {
  const response = await apiClient.post(ENDPOINTS.login, credentials);
  return response;
}

export const refreshTokenService = async (refreshToken: any) => {
  const response = await apiClient.post(ENDPOINTS.refreshToken, { refreshToken });
  return response;
}
