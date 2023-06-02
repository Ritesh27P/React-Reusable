import { useEffect, useState } from "react";
import Table from "./Table";
import { GoCode, GoChevronUp, GoChevronDown } from 'react-icons/go'

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {config, data} = props;

    const handleClick = label => {
        if (sortBy && label !== sortBy) {
            setSortBy(label);
            setSortOrder('asc')
            return;
        }
        
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null);
        }
    }


    const updatedConfig = config.map(column => {
        if (!column.sortValue) return column

        return {
            ...column,
            header: () => <th onClick={()=> handleClick(column.label)} className="cursor-pointer hover:bg-gray-100" >
                            <div className="flex items-center" >
                                {getIcon(column.label, sortBy, sortOrder)}
                                {column.label}
                            </div>
                          </th>
        }
    })

    let sortedData = data;
    if (sortBy && sortOrder) {
        const {sortValue} = config.find(column=> column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof(valueA) === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            
            return (valueA - valueB) * reverseOrder;
        })  
    }

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    );
}

const getIcon = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <GoCode />;
    }

    if (sortOrder === null) return <GoCode />
    if (sortOrder === 'asc') return <GoChevronUp />
    if (sortOrder === 'desc') return <GoChevronDown />
}

export default SortableTable;