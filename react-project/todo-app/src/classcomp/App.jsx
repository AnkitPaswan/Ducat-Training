import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: ["Ankit", "Kumar", "Paswan"],
            editData: {
                index: -1,
                data: ''
            }
        }
    }

    addTodo = (value) => {
        this.setState({
            todos: [...this.state.todos, value]
        });


        // console.log(value);
    }


    deleteTodo = (value) => {
        let filterTodos = this.state.todos.filter((todo) => todo !== value);
        this.setState({ todos: [...filterTodos] })
    };

    editTodo = (index, data) => {
        // console.log(index, data);
        this.setState({ editData: { index, data } })
    }

    updateTodo = (index, data) => {
        this.state.todos.splice(index, 1, data);
        this.setState({
            todos: [...this.state.todos],
            editData: {
                index: -1,
                data: ''
            }
        })

    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <Input addTodo={this.addTodo} editData={this.state.editData} updateTodo={this.updateTodo} />
                    <List todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
                </div>
            </div>
        )
    }
}
