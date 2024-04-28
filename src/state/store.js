import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
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
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: ENV,
});

const persistor = persistStore(store);

export { persistor, store };
