import React, { Component } from 'react'
import "./style.css"


const sortTypes = {
    up: {
        class: 'sort-up',
        fn: (a,b) => a.age - b.age
    },
    down: {
        class: 'sort-down',
        fn: (a,b) => b.age - a.age
    },
    default: {
        class: 'sort',
        fn: (a,b) => a
    }
}
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {id:1, name: 'Jayquellin', age: 23, email: "Jayquellin@email.com" },
                {id:2, name: 'Belaakay', age: 21, email: "Belaakay@email.com" },
                {id:3, name: 'De-nice', age: 22, email: "De-nice@email.com" },
                {id:4, name: 'AAron', age: 25, email: "AAron@email.com" },
            ],
            currentSort: 'default'
        } 
    }

    renderTableData() {
        this.state.employees.sort(sortTypes[this.state.currentSort].fn)
        return this.state.employees.map((employee, index) => {
           const { id, name, age, email } = employee //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
  
     renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
           return <th key={index} onClick = {this.handleOnClick}>{key.toUpperCase()}</th>
        })
     }

     handleOnClick = () =>{
        const { currentSort } = this.state;
        let nextSort;
        
        if(currentSort === 'down') nextSort = 'up';
        else if(currentSort === 'up') nextSort = 'default';
        else if(currentSort === 'default') nextSort = 'down';
        this.setState({
            currentSort: nextSort
        })
        alert("Clicked!")
     }

     render() {
        return (
           <div>
              <h1 id='title'>Current Employees</h1>
              <table id='employees'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
  }


export default Table