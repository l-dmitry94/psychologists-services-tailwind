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
                                    'after:absolute after:bottom-[-12px] after:left-2/4 after:h-2 after:w-2 after:-translate-x-2/4 after:rounded-full after:bg-primary after:content-[""]':
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
