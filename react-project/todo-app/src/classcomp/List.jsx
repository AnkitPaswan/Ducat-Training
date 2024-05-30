import React, { Component } from 'react'

export default class List extends Component {


    render() {
        return (
            <section className='mt-5'>
                <ul className="list-group">
                    {/* {
                    props.todos.length > 0 ? props.todos.map((value, index) => {
                        return <li className="list-group-item" key={index}>{value}</li>
                    }) :
                        <li className="list-group-item">No Todo</li>
                } */}

                    {
                        this.props.todos.length > 0 ? this.props.todos.map((value, index) => (
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                <div>

                                    {value}
                                </div>
                                <div>

                                    <button className="btn btn-warning me-2" onClick={() => {
                                        this.props.editTodo(index, value)
                                    }}

                                    >Edit</button>
                                    <button className="btn btn-danger" onClick={() => {
                                        this.props.deleteTodo(value)
                                    }
                                    }

                                    >Delete</button>

                                </div>
                            </li>
                        )) :
                            <li className="list-group-item">No Todo</li>
                    }
                </ul>
            </section>
        )
    }
}
