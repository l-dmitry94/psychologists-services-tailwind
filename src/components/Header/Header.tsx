import Container from 'components/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import BurgerMenu from './BurgerMenu';

import navItems from './navigation.json';
import { useMedia } from 'hooks/useMedia';

const Header = () => {
    const { isDesktop } = useMedia();

    return (
        <div className="relative border-b border-black-100/10 py-6">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-32">
                        <Logo />
                        {isDesktop && <Navigation items={navItems} />}
                    </div>
                    {isDesktop && <Auth />}
                    {!isDesktop && <BurgerMenu items={navItems} />}
                </div>
            </Container>
        </div>
    );
};

export default Header;
