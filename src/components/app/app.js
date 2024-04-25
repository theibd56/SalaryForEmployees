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
                {id: 1, name: 'Alex C.', salary: 800, increase: true, like: false},
                {id: 2, name: 'Corney J.', salary: 1600, increase: false, like: false},
                {id: 3, name: 'Mike F.', salary: 2500, increase: false, like: false},
            ]
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

    addUser = (name, salary) => {
        const newEmployees = {
            name, salary, increase: false, id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newEmployees];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteEmployees}/>
                <EmployeesAddForm onAdd={this.newEmployees}/>
            </div>
        );
    }

}

export default App;