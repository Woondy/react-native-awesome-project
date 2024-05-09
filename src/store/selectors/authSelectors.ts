import { store } from "../store";

const getAuthState = () => store.getState().auth;

export const getAccessToken = () => getAuthState().accessToken;
export const getRefreshToken = () => getAuthState().refreshToken;
