import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import api from '../services/api';
import { ENV } from '../utils/config';
import auth from './authSlice';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  [auth.reducerPath]: auth.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: [],
  },
  reducers,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: ENV === 'development',
});

const persistor = persistStore(store);

export { persistor, store };
