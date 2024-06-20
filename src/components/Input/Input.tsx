import { FC, useState } from 'react';

import { IInput } from './Input.types';
import { icons } from 'assets/icons';

import css from './Input.module.css';
import clsx from 'clsx';

const Input: FC<IInput> = ({ register, value, inputType, errorText, ...rest }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {inputType === 'password' ? (
                <div>
                    <div className="relative">
                        <input
                            {...rest}
                            type={showPassword ? 'text' : inputType}
                            {...register(value)}
                            className={css.input}
                        />

                        <button
                            onClick={togglePassword}
                            type="button"
                            className="absolute right-[18px] top-2/4 -translate-y-2/4"
                        >
                            <svg className="h-5 w-5 fill-none stroke-black-100">
                                <use
                                    className={clsx('transition-opacity', {
                                        'opacity-0': showPassword,
                                        'opacity-100': !showPassword,
                                    })}
                                    href={`${icons}#icon-eye`}
                                ></use>
                                <use
                                    className={clsx('transition-opacity', {
                                        'opacity-100': showPassword,
                                        'opacity-0': !showPassword,
                                    })}
                                    href={`${icons}#icon-eye-off`}
                                ></use>
                            </svg>
                        </button>
                    </div>
                    {errorText && <p className={css.error}>{errorText}</p>}
                </div>
            ) : (
                <div>
                    <input {...rest} type={inputType} {...register(value)} className={css.input} />
                    {errorText && <p className={css.error}>{errorText}</p>}
                </div>
            )}
        </>
    );
};

export default Input;
