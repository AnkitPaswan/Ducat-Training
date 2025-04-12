import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>Counter :{this.props.counter}</p>
                <button onClick={() => {
                    this.props.increment()
                }}>Increment</button>
                <button onClick={() => {
                    this.props.decrement()
                }}>Decrement</button>
            </div>
        )
    }
}

const stateMapToProps = (store) => {
    return {
        counter: store.counter
    }
}

const dispatchMapToProps = (dispatch) => {
    return {
        increment: (value) => {
            dispatch({ type: 'INCREMENT', payload: value })
        },
        decrement: (value) => {
            dispatch({ type: 'DECREMENT', payload: 1 })
        }
    }
}
export default connect(stateMapToProps, dispatchMapToProps)(App)
