import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {

    let counter = useSelector((store) => store.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({
            type: "INCREMENT",
            payload: 1
        })
    }
    const decrement = () => {
        dispatch({
            type: "DECREMENT",
            payload: 1
        })
    }

    return (
        <div>
            <p>Counter :{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
