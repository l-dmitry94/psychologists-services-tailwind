import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Auth, UserCredential } from 'firebase/auth';

import { IUserState } from '../../../redux/auth/types';

export interface IAuthModal {
    email: string;
    password: string;
}

export interface IRegistrationModal extends IAuthModal {
    name: string;
}

export interface ICloseBurgerMenu {
    closeBurgerMenu: () => void;
}

export interface ICloseModal extends ICloseBurgerMenu {
    closeModal: () => void;
}

export interface IFirebaseAuth extends ICloseModal {
    operation: (auth: Auth, email: string, password: string) => Promise<UserCredential>;
    trimmedEmail: string;
    trimmedPassword: string;
    dispatch: ThunkDispatch<
        {
            auth: IUserState & PersistPartial;
        },
        undefined,
        UnknownAction
    > &
        Dispatch<UnknownAction>;
    trimmedName?: string;
}
