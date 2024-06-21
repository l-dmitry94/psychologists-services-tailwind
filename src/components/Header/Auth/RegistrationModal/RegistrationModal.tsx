import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import Input from 'components/Input';
import Button, { ButtonType } from 'components/Button';

import { useAppDispatch } from 'hooks/hooks';
import { validationSchema } from './validationSchema';
import FirebaseAuth from '../FirebaseAuth';

import { ICloseModal, IRegistrationModal } from '../Auth.types';

const RegistrationModal: FC<ICloseModal> = ({ closeModal, closeBurgerMenu }) => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegistrationModal>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IRegistrationModal> = async ({ email, password, name }) => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedName = name.trim();

        await FirebaseAuth({
            operation: createUserWithEmailAndPassword,
            trimmedEmail,
            trimmedPassword,
            closeModal,
            closeBurgerMenu,
            dispatch,
            trimmedName,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10 flex flex-col gap-[18px]">
                <Input
                    register={register}
                    inputType="text"
                    value="name"
                    placeholder="Name"
                    errorText={errors.name?.message}
                />
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

            <Button button={ButtonType.Tertiary} type="submit" label="Sign Up" />
        </form>
    );
};

export default RegistrationModal;
