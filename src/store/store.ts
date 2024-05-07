import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { reduxStorage } from '../utils/storage';
import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['auth.isLoggedIn', 'auth.token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
