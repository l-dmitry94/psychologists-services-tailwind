import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Input';
import Button, { ButtonType } from 'components/Button';

import { validationSchema } from './validationSchema';
import { IRegistrationModal } from '../Auth.types';

const RegistrationModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegistrationModal>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IRegistrationModal> = (data) => {
        console.log(data);
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
