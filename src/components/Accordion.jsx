import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go"

const Accordion = ({items}) => {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (nextIndex) => {
        if (nextIndex === expandedIndex) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(nextIndex)
        }
    }

    const renderItem = items.map((element, index) => {
        const isExpanded = index === expandedIndex;
        const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;

        return <div key={element.id} >
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)} >{element.label} {icon}</div>
            <div className="border-b p-5">{isExpanded && element.content}</div>
        </div>
    })
    return (
        <div className="border-x border-t rounded" >{renderItem}</div>
    );
}

export default Accordion;