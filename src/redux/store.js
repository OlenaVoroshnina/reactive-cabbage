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

import authSlice from 'redux/auth/authSlice.jsx';
import transactionsSlice from 'redux/transactions/transactionSlice.jsx';
import { reportsReducer } from 'redux/reports/reports';
import { reportsQueryReducer } from 'redux/reportsQuery/reportsQuerySlice';

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

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    transactions: persistReducer(transactionsPersistConfig, transactionsSlice),
    reports: reportsReducer,
    reportsQuery: reportsQueryReducer,
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
