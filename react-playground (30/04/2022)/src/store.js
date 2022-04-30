import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { auth: {} },
  reducers: {
    setAuth: (state, payload) => {
      // n achei outra forma de setar o estado sem erro de lint
      // eslint-disable-next-line no-param-reassign
      state.auth = payload.payload;
    },
  },
});
export const { setAuth } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
