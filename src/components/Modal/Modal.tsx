import { FC } from 'react';
import ReactModal from 'react-modal';

import { icons } from 'assets/icons';
import { IModal } from './Modal.types';
import clsx from 'clsx';

ReactModal.setAppElement('#root');

const Modal: FC<IModal> = ({ modalIsOpen, closeModal, title, description, children }) => {
    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            overlayClassName={clsx(
                'fixed top-0 left-0 w-full h-full opacity-0 flex items-center justify-center bg-black-100/60 overflow-hidden overflow-y-auto z-50 p-5 transition-opacity ease-linear duration-300 overlay'
            )}
            className="content relative w-full max-w-[566px] translate-y-12 rounded-[30px] bg-gray-100 p-8 outline-transparent transition-transform duration-300 ease-linear md:p-16"
        >
            <button onClick={closeModal} className="absolute right-5 top-5">
                <svg className="h-8 w-8 stroke-black-100">
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>
            <div className="mb-10">
                <h3 className="mb-5 text-[2rem] font-medium leading-tight tracking-tight md:text-[40px]">
                    {title}
                </h3>
                <p className="text-base leading-tight text-black-100/50">{description}</p>
            </div>

            {children}
        </ReactModal>
    );
};

export default Modal;
