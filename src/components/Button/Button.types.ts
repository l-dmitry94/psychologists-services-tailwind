export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
}

export interface IButtons {
    type: 'button' | 'submit' | 'reset';
    label: string;
    button: ButtonType;
}
