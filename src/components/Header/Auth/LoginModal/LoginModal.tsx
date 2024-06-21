import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';

import Button, { ButtonType } from 'components/Button';
import Input from 'components/Input';

import { validationSchema } from './validationSchema';
import { IAuthModal, ICloseModal } from '../Auth.types';
import { useAppDispatch } from 'hooks/hooks';
import FirebaseAuth from '../FirebaseAuth';

const LoginModal: FC<ICloseModal> = ({ closeModal, closeBurgerMenu }) => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthModal>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IAuthModal> = async ({ email, password }) => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        await FirebaseAuth({
            operation: signInWithEmailAndPassword,
            trimmedEmail,
            trimmedPassword,
            closeModal,
            closeBurgerMenu,
            dispatch,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10 flex flex-col gap-[18px]">
                <Input
                    register={register}
                    inputType="text"
                    value="email"
                    placeholder="Email"
                    errorText={errors.email?.message}
                />
                <Input
                    register={register}
                    inputType="password"
                    value="password"
                    placeholder="Password"
                    errorText={errors.password?.message}
                />
            </div>

            <Button button={ButtonType.Tertiary} type="submit" label="Log In" />
        </form>
    );
};

export default LoginModal;
