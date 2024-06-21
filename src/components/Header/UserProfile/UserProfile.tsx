import { FC } from 'react';

import Button, { ButtonType } from 'components/Button';

import { icons } from 'assets/icons';
import { useAppDispatch } from 'hooks/hooks';
import { removeUser } from '../../../redux/auth/auth.slice';

interface UserProfileProps {
    name: string;
}

const UserProfile: FC<UserProfileProps> = ({ name }) => {
    const dispatch = useAppDispatch();

    const logOut = () => {
        dispatch(removeUser());
    };
    return (
        <div className="flex flex-col gap-7 xl:flex-row xl:items-center">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-black-100 xl:bg-primary">
                    <svg className="h-6 w-6 fill-gray-100">
                        <use href={`${icons}#icon-user`}></use>
                    </svg>
                </div>
                <p className="font-medium leading-tight tracking-[-0.01em] text-gray-100 xl:text-black-100">
                    {name}
                </p>
            </div>
            <div onClick={logOut}>
                <Button button={ButtonType.Secondary} label="Log out" type="button" />
            </div>
        </div>
    );
};

export default UserProfile;
