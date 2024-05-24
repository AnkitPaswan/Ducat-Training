
//23/05/24

import React, { useState } from 'react'

export default function App() {
    let [counter, setCounter] = useState(0);

    const increment = () => {
        //it is async
        //1
        // setCounter(counter + 1);

        //2
        // setCounter(counter ++);

        //3
        // setCounter(++counter);

        //4 callback
        setCounter((prevValue) => {
            console.log(prevValue);
            return prevValue + 1
        });
        console.log(counter);
    }
    const decrement = () => {
        setCounter(counter - 1);
        console.log(counter);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
