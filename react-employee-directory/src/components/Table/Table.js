import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Employees: [
                {id:1, name: 'Jayquellin', age: 20, email: "Jayquellin@email.com" },
                {id:2, name: 'Belaakay', age: 21, email: "Belaakay@email.com" },
                {id:3, name: 'De-nice', age: 22, email: "De-nice@email.com" },
                {id:4, name: 'AAron', age: 25, email: "AAron@email.com" },
            ]
        } 
    }

    render(){
        return(
            <div>
                <h1>Employees</h1>
            </div>
        )
    }
}

export default Table