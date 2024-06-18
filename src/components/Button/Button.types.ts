export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface IButtons {
    type: 'button' | 'submit' | 'reset';
    label: string;
    button: ButtonType;
}
