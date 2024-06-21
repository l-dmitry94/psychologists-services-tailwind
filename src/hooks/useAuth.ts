import { useAppSelector } from './hooks';
import { selectId, selectEmail, selectName } from '../redux/auth/auth.selectors';

const useAuth = () => {
    const id = useAppSelector(selectId);
    const email = useAppSelector(selectEmail);
    const name = useAppSelector(selectName);

    return {
        id,
        email,
        name,
    };
};

export default useAuth;
