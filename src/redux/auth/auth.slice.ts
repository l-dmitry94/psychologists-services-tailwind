import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUserState } from './types';

const initialState: IUserState = {
    id: null,
    name: null,
    email: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUserState>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        removeUser(state) {
            state.id = null;
            state.name = null;
            state.email = null;
            state.token = null;
        },
    },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
