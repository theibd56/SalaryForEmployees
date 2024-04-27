import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'Alex C.', salary: 800, increase: true, rise: false},
                {id: 2, name: 'Corney J.', salary: 1600, increase: false, rise: true},
                {id: 3, name: 'Mike F.', salary: 2500, increase: false, rise: false},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteEmployees = (id) => {
        this.setState(({data}) => {            
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    newEmployees = (name, salary) => {
        const newEmployees = {
            name, salary, increase: false, rise: false, id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newEmployees];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployees = (items, term) => {
        if(term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilter = (items, filter) => {
        switch(filter) {
            case 'raise':
                return items.filter(item => item.rise)
            case 'small-salary':
                return items.filter(item => item.salary <= 1000)
            case 'big-salary':
                return items.filter(item => item.salary > 3000)
            default:
                return items
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.onFilter(this.searchEmployees(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increasedEmployees={increasedEmployees}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter ={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteEmployees}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.newEmployees}/>
            </div>
        );
    }

}

export default App;