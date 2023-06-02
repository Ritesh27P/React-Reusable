import { useState } from "react";
import {GoChevronDown} from "react-icons/go"

const Dropdown = ({options, onChange, value}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (value) => {
        setIsOpen(false);

        onChange(value)

    }

    const renderOptions = options.map((option, index) => {

        return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=> handleOptionClick(option.value)} key={option.value} >
            {option.label}
        </div>
        )
    })

    return (
        <div className="w-48 relative">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{value || <h5>Select...</h5>} <GoChevronDown /></div>
            {isOpen && <div className="absolute border rounded p-3 top-full bg-white w-full shadow">{renderOptions}</div>}

        </div>
    );
}

export default Dropdown;