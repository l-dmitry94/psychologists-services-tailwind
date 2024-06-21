import { getAuth, updateProfile } from 'firebase/auth';

import { setUser } from '../../../../redux/auth/auth.slice';
import { IFirebaseAuth } from '../Auth.types';

const FirebaseAuth = async ({
    operation,
    trimmedEmail: email,
    trimmedPassword: password,
    closeModal,
    closeBurgerMenu,
    dispatch,
    trimmedName: name,
}: IFirebaseAuth) => {
    const auth = getAuth();
    try {
        const { user } = await operation(auth, email, password);

        if (name) {
            await updateProfile(user, { displayName: name });
        }

        dispatch(
            setUser({
                id: user.uid,
                name: user.displayName,
                token: await user.getIdToken(),
                email: user.email,
            })
        );
        closeModal();
        closeBurgerMenu();
    } catch (error) {
        console.error(error);
    }
};

export default FirebaseAuth;
