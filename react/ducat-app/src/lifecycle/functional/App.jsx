import React, { useEffect, useState } from 'react'

export default function App() {

    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);


    console.log("App component load");
    const increment = () => {
        setCounter(counter + 1);
        setCounter1(counter1 + 1);
    }

    //componentDidUpdate
    // useEffect(() => {
    //     console.log('use Effect');
    //     console.log(counter);
    // })

    //componentDidMount
    // useEffect(() => {
    //     console.log('use Effect');
    //     console.log(counter);
    // },[])

    //componentDidUpdate with dependencies
    useEffect(() => {
        console.log('use Effect');
        console.log(counter);
        setCounter(counter + 1);
    }, [counter1])

    return (
        <div>
            {console.log("return")}
            <p>Counter : {counter}</p>
            <p>Counter1 : {counter1}</p>

            <button onClick={increment}>Increment</button>
        </div>
    )
}
