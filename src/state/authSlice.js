import { createSlice } from '@reduxjs/toolkit';
import authService from '../services/authService';
import userService from '../services/userService';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuth: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.token = null;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(authService.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      console.log(action.payload.accessToken);
      state.isAuth = true;
    });

    build.addMatcher(userService.endpoints.me.matchFulfilled, (state, action) => {
      state.user = action.payload;
    });

    build.addMatcher(userService.endpoints.me.matchRejected, (state) => {
      state.user = null;
      state.isAuth = false;
      state.token = null;
    });
  },
});

export const actions = authSlice.actions;

const auth = {
  reducer: authSlice.reducer,
  reducerPath: authSlice.name,
  actions: authSlice.actions,
};

export default auth;
