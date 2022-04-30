import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { auth: {} },
    reducers: {
        setAuth: (state, payload) => {
            state.auth = payload.payload;
        }
    }
})
export const { setAuth } = userSlice.actions;


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})

export default store;
