import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import Navigation from '../Navigation';
import Auth from '../Auth';

import { icons } from 'assets/icons';
import useAuth from 'hooks/useAuth';

import { INavigation } from '../Navigation/Navigation.types';
import UserProfile from '../UserProfile';

const BurgerMenu: FC<INavigation> = ({ items }) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const { name } = useAuth();

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [menuIsOpen]);

    return (
        <div onClick={toggleMenu}>
            <button onClick={toggleMenu} className="flex items-center justify-center">
                <svg className="h-6 w-6 fill-black-100">
                    <use href={`${icons}#icon-burger`}></use>
                </svg>
            </button>

            <div
                className={clsx(
                    'absolute left-0 top-0 h-screen w-screen backdrop-blur-[2px] transition-[opacity] ease-linear',
                    {
                        'invisible opacity-0': !menuIsOpen,
                        'visible opacity-100': menuIsOpen,
                    }
                )}
            />

            <div
                className={clsx(
                    'fixed right-0 top-0 h-full w-full transition-transform ease-linear',
                    {
                        'translate-x-full': !menuIsOpen,
                        'translate-x-0': menuIsOpen,
                    }
                )}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 top-0 flex h-full w-2/3 flex-col justify-between bg-primary p-5"
                >
                    <Navigation items={items} />
                    {name ? (
                        <UserProfile name={name} />
                    ) : (
                        <Auth closeBurgerMenu={() => setMenuIsOpen(false)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
