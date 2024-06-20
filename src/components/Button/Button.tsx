import { FC } from 'react';
import clsx from 'clsx';

import { ButtonType, IButtons } from './Button.types';

const Button: FC<IButtons> = ({ button, label, type }) => {
    return (
        <button
            type={type}
            className={clsx(
                'rounded-[30px] px-10 py-[14px] font-medium leading-tight tracking-[-0.01em] transition-colors duration-300 ease-linear hover:bg-primary-dark',
                button === ButtonType.Primary && 'bg-primary text-gray-100',
                button === ButtonType.Secondary &&
                    'border-x border-y border-black-100/20 bg-gray-100 hover:text-gray-100',
                button === ButtonType.Tertiary && 'w-full bg-primary py-4 text-gray-100'
            )}
        >
            {label}
        </button>
    );
};

export default Button;
