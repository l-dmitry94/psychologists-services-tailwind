import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { INavigation } from './Navigation.types';

const Navigation: FC<INavigation> = ({ items }) => {
    return (
        <ul className="flex flex-col items-start gap-10 text-left xl:flex-row xl:items-center">
            {items.map(({ label, href }) => (
                <li key={label}>
                    <NavLink
                        to={href}
                        className={({ isActive }) =>
                            clsx(
                                'relative leading-tight tracking-[-0.01em] text-gray-100 xl:text-black-100',
                                {
                                    'after:absolute after:h-2 after:w-2 after:animate-bounce after:rounded-full after:content-[""] xs:max-xl:after:-right-3 xs:max-xl:after:top-2/4 xs:max-xl:after:-translate-y-2/4 xs:max-xl:after:bg-gray-100 xl:after:bottom-[-12px] xl:after:left-2/4 xl:after:-translate-x-2/4 xl:after:bg-primary':
                                        isActive,
                                }
                            )
                        }
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
