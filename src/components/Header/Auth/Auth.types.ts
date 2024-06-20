export interface IAuthModal {
    email: string;
    password: string;
}

export interface IRegistrationModal extends IAuthModal {
    name: string;
}
