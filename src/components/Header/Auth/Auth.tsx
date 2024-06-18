import Button, { ButtonType } from 'components/Button';

const Auth = () => {
    return (
        <ul className="flex flex-col items-center gap-2 xl:flex-row">
            <li>
                <Button button={ButtonType.Secondary} label="Log In" type="button" />
            </li>
            <li>
                <Button button={ButtonType.Primary} label="Registration" type="button" />
            </li>
        </ul>
    );
};

export default Auth;
