import { FC } from 'react';
import clsx from 'clsx';

import { icons } from 'assets/icons';
import { IIcon, Icon } from './HeroIcon.types';

const HeroIcon: FC<IIcon> = ({ icon }) => {
    return (
        <div
            className={clsx(
                'absolute flex h-12 w-12 items-center justify-center rounded-[10px]',
                icon === Icon.Question &&
                    '-left-2 top-48 rotate-[-15deg] bg-primary-question xl:-left-8',
                icon === Icon.Users &&
                    '-right-2 top-11 rotate-[15deg] bg-primary-users xl:-right-10'
            )}
        >
            <svg className="h-5 w-5 fill-gray-100">
                <use href={`${icons}#icon-${icon}`}></use>
            </svg>
        </div>
    );
};

export default HeroIcon;
