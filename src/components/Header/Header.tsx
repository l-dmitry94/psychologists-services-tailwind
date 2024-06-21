import { useEffect } from 'react';

import Container from 'components/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import BurgerMenu from './BurgerMenu';

import navItems from './navigation.json';
import { useMedia } from 'hooks/useMedia';
import useAuth from 'hooks/useAuth';
import UserProfile from './UserProfile';

const Header = () => {
    const { isDesktop } = useMedia();
    const { name } = useAuth();

    useEffect(() => {
        if (isDesktop) {
            document.body.style.overflow = 'visible';
        }
    }, [isDesktop]);

    return (
        <div className="relative z-50 border-b border-black-100/10 py-6">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-32">
                        <Logo />
                        {isDesktop && <Navigation items={navItems} />}
                    </div>
                    {isDesktop && name && <UserProfile name={name} />}
                    {isDesktop && !name && <Auth closeBurgerMenu={() => {}} />}
                    {!isDesktop && <BurgerMenu items={navItems} />}
                </div>
            </Container>
        </div>
    );
};

export default Header;
