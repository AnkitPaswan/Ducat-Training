
import React, { useReducer, useState } from 'react'
import { counterReducer } from './counter.reducer';

export default function App() {
    let [counter, dispatch] = useReducer(counterReducer, 0);

    const increment = () => {
        dispatch({
            type: "increment",
            payload: 1
        })
    }
    const decrement = () => {
        dispatch({
            type: "decrement",
            payload: 1
        })
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
