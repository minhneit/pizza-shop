'use client';

import { useState } from 'react';

//image
import Image from 'next/image';

//modal
import Modal from 'react-modal';

//components
import PizzaDetails from './PizzaDetails';

//icons
import { IoMdClose } from 'react-icons/io';

//bind modal to body
Modal.setAppElement('body');

//modal styles
const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
};

const Pizza = ({ pizza }) => {
    const [modal, setModal] = useState(false);

    //open modal
    const openModal = () => {
        setModal(true);
    };
    //close modal
    const closeModal = () => {
        setModal(false);
    };
    return (
        <div className="group py-2 xl:py-4 xl:px-2 rounded-xl">
            <Image
                className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
                width={270}
                height={270}
                src={pizza.image}
                alt="Pizza"
            />

            {/* title */}
            <div>
                <div className="text-xl font-bold mb-3 capitalize cursor-pointer">{pizza.name}</div>
            </div>

            {/* description */}
            <div className="text-sm fomt-medium min-h-[60px] mb-6">{pizza.description}</div>

            {/* price & btn*/}
            <div className="mb-6 flex justify-between items-center">
                {/* price -> hidden(sm) - visible(lg) */}
                <div className="hidden lg:flex text-xl font-semibold">${pizza.priceSm}</div>
                {/* btn -> hidden(sm) - visible(lg) */}
                <button
                    onClick={openModal}
                    className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
                >
                    Choose
                </button>
                {/* btn -> visible(sm) - hidden(lg) */}
                <button
                    onClick={openModal}
                    className="btn btn-sm gradient lg:hidden px-3 font-semibold text-base min-w-[150px]"
                >
                    $ {pizza.priceSm}
                </button>
            </div>

            {/* modal */}
            {modal && (
                <Modal
                    isOpen={modal}
                    style={modalStyles}
                    onRequestClose={closeModal}
                    contentLabel="Pizza Modal"
                    className="bg-white w-full h-full lg:w-[900px] lg:h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
                >
                    {/* close modal icon */}
                    <div
                        onClick={closeModal}
                        className="absolute z-30 right-5 top-5 hover:scale-110 duration-200 cursor-pointer"
                    >
                        <IoMdClose className="text-3xl text-orange" />
                    </div>
                    {/* pizza details */}
                    <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
                </Modal>
            )}
        </div>
    );
};

export default Pizza;
