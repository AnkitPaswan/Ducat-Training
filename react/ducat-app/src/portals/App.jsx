
//03/06/24
import React from 'react'
import Header from './Header'
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <div>
            <p>App Components</p>
            {ReactDOM.createPortal(<Header />, document.getElementById("header"))}
        </div>
    )
}
