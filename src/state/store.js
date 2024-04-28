import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import api from '../services/api';
import auth from './authSlice';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  [auth.reducerPath]: auth.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: localStorage,
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
});

const persistor = persistStore(store);

export { persistor, store };
