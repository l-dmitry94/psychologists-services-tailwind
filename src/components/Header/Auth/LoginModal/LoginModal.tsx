import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonType } from 'components/Button';
import Input from 'components/Input';

// import { ILoginModal } from './LoginModal.types';
import { validationSchema } from './validationSchema';
import { IAuthModal } from '../Auth.types';

const LoginModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthModal>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IAuthModal> = (data) => {
        console.log(data);
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
