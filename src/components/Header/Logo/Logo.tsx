import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="text-xl font-bold leading-tight tracking-tight text-primary">
            psychologists<span className="font-medium">.</span>
            <span className="text-black-100 font-semibold">services</span>
        </Link>
    );
};

export default Logo;
