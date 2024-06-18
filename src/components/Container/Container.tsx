import { FC } from 'react';

import { IContainer } from './Container.types';

const Container: FC<IContainer> = ({ children }) => {
    return <div className="m-auto max-w-screen-xl px-5">{children}</div>;
};

export default Container;
