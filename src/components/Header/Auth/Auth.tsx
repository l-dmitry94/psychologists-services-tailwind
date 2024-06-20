import { useState } from 'react';

import Button, { ButtonType } from 'components/Button';
import Modal from 'components/Modal';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

const Auth = () => {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
    const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState<boolean>(false);

    return (
        <>
            <ul className="flex flex-col items-center gap-2 xl:flex-row">
                <li onClick={() => setLoginModalIsOpen(true)}>
                    <Button button={ButtonType.Secondary} label="Log In" type="button" />
                </li>
                <li onClick={() => setRegistrationModalIsOpen(true)}>
                    <Button button={ButtonType.Primary} label="Registration" type="button" />
                </li>
            </ul>

            <Modal
                modalIsOpen={loginModalIsOpen}
                closeModal={() => setLoginModalIsOpen(false)}
                title="Log In"
                description="Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."
            >
                <LoginModal />
            </Modal>

            <Modal
                modalIsOpen={registrationModalIsOpen}
                closeModal={() => setRegistrationModalIsOpen(false)}
                title="Registration"
                description="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
            >
                <RegistrationModal />
            </Modal>
        </>
    );
};

export default Auth;
