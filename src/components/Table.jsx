import { Fragment } from "react"

const Table = ({data, config, keyFn}) => {

    const renderHeader = config.map(column => {
        if (column.header) {
            return <Fragment key={column.label} >{column.header()}</Fragment>
        }
        return <th key={column.label} >{column.label}</th>
    })

    const renderTable = data.map(rowData=> {
        const renderCells = config.map(column => {
            return <td key={column.label}>{column.render(rowData)}</td>
        })
        return (
        <tr className="border-b" key={keyFn(rowData)} >
            {renderCells}
        </tr>
        ) 
    })

    return (
        <div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        {renderHeader}
                    </tr>
                </thead>
                <tbody>
                    {renderTable}
                </tbody>
            </table>
        </div>
    );
}

export default Table;