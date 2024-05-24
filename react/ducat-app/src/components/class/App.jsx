
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 1000
        }
    }
    // increment = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    // will not work
    // increment = () => {
    //     this.setState({
    //         counter: this.state.counter++
    //     })
    // }

    //3
    // increment = () => {
    //     this.setState({
    //         counter: ++this.state.counter
    //     })
    // }

    //4
    increment = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
