import React, { useState } from 'react'
import { store, initialState } from '../store/store'


export default function CounterProvider(props) {

    let [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <store.Provider value={{
            ...initialState,
            counter: 10,
            increment,
            decrement
        }}>{props.children}</store.Provider>
    )
}
