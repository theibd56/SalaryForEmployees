import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(elem => {
        const {id, ...elemProps} = elem
        return (
            <EmployeesListItem 
                key={id} 
                {...elemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    const noElementsText = 'ERROR: No employees were found according to the specified criteria, please check the entered data'

    const noElements = () => {
        return (
            <li className='list-group-item' style={{textAlign: 'center'}}>
                <span className="list-group-item-label">{noElementsText}</span>
            </li>
        )
    }

    return (
        <ul className="app-list list-group">
            {elements.length !== 0 ? elements : noElements()}
        </ul>
    )
}

export default EmployeesList;