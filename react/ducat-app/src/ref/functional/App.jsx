import React, { useRef } from 'react'

export default function App() {

    //let paragraphRef = React.useRef();
    let paragraphRef = useRef();

    let inputRef = useRef();


    const getDetails = () => {
        paragraphRef.current.classList.toggle("container")
        console.log(inputRef.current.value);
    }


    return (
        <div>
            <input type="text" ref={inputRef} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur quas vitae!</p>

            <button onClick={getDetails}>Click Me</button>

            <p>{inputRef.current.value}</p>
        </div>
    )
}
