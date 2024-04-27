import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'raise', label: 'For a raise'},
        {name: 'small-salary', label: 'The salary is less than $1000'},
        {name: 'big-salary', label: 'Salary is more than $3000'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const btnClass = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type='button'
                    className={`btn ${btnClass}`}
                    key={name}
                    onClick={() => props.onUpdateFilter(name)}>
                        {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;