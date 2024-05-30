import React, { Component } from 'react'

export default class Input extends Component {

    constructor() {

        super();

        this.state = {
            todo: ""
        }
    }

    inputChange = (event) => {

        this.setState({
            todo: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault();

        if (this.props.editData.index === -1) {

            this.props.addTodo(this.state.todo);
        } else {
            this.props.updateTodo(this.props.editData.index, this.state.todo)
        }

        this.setState({
            todo: ''
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.editData.index !== this.props.editData.index) {

            this.setState({ todo: this.props.editData.data })
        }
    }
    render() {
        return (
            <div>
                <section>
                    <form onSubmit={this.submit}>
                        <div className="row">
                            <div className="col-10">
                                <input type="text" className="form-control" placeholder="Enter Todo"
                                    value={this.state.todo}
                                    onChange={this.inputChange}
                                />
                                {/* {error && <p className="text-danger">please enter todo</p>} */}
                            </div>
                            <div className="col-2 d-grid">
                                <button className="btn btn-primary"
                                    disabled={!this.state.todo}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}
