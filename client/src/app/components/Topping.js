//next image
import Image from 'next/image';
import { useState } from 'react';
//icons
import { IoMdCheckmark } from 'react-icons/io';
const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
    const [isChecked, setIsChecked] = useState(false);
    //hanlde check box
    const hanldeCheckBox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div
            className={`${
                isChecked && 'border-orange'
            } w-full max-w-[120px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
        >
            <Image width={70} height={70} src={topping.image} alt="" className="mb-2" />

            {/* topping name */}
            <div className="text-sm font-medium text-center capitalize">{topping.name}</div>

            {/* checkbox */}
            <input
                onClick={hanldeCheckBox}
                className="absolute w-full h-full opacity-0 cursor-pointer"
                type="checkbox"
                checked={isChecked}
            />

            {/* checkmark icon */}
            <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
                <IoMdCheckmark className="text-xl text-orange" />
            </div>
        </div>
    );
};

export default Topping;
