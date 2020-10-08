import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {id:1, name: 'Jayquellin', age: 20, email: "Jayquellin@email.com" },
                {id:2, name: 'Belaakay', age: 21, email: "Belaakay@email.com" },
                {id:3, name: 'De-nice', age: 22, email: "De-nice@email.com" },
                {id:4, name: 'AAron', age: 25, email: "AAron@email.com" },
            ]
        } 
    }

    renderTableData() {
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
           return <th key={index}>{key.toUpperCase()}</th>
        })
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