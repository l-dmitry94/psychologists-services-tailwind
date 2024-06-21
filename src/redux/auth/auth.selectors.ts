import { RootState } from '../store';

export const selectId = (state: RootState) => state.auth.id;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectName = (state: RootState) => state.auth.name;
