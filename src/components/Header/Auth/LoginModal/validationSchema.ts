import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .matches(
            /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
            'Example: Qwerty123!'
        ),
});
