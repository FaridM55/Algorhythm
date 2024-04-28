import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: (build) => {},
});

const auth = {
  reducer: authSlice.reducer,
  reducerPath: authSlice.name,
};

export default auth;
