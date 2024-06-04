import React, { useEffect, useState } from 'react'

export default function App() {

    let [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1)
    }
    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        //clean up function

        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return (
        <div>
            <p>Counter : {counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
