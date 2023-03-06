import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from 'redux/auth/authSlice';
import transactionsSlice from 'redux/transaction/transactionsSlice';
import userSlice from 'redux/user/userSlice';
// import { reportsReducer } from './reports/reports';
// import { reportsQueryReducer } from './reportsQuery/reportsQuerySlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'userEmail', 'isLoggedIn', 'refreshToken', 'sid'],
};

const transactionsPersistConfig = {
  key: 'transactions',
  storage,
  whitelist: [],
};

const userPersistConfig = {
    key: 'user',
    storage,
  };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    transactions: persistReducer(transactionsPersistConfig, transactionsSlice),
    user: persistReducer(userPersistConfig, userSlice),
    // reports: reportsReducer,
    // reportsQuery: reportsQueryReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);