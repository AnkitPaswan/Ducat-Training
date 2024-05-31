
//30/05/24
import React from 'react'


// via import
import './App.css'

//via module
import styles from './App.module.css'


//inline css in react
export default function App() {
    return (
        // <p className='container' style={{ background: "red", color: "white" }}>
        //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis adipisci pariatur amet quam fuga iusto esse repudiandae est nihil earum, aliquid nesciunt cumque.
        // </p>
        // <p className='container' >
        //     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        // </p>
        <p className={styles.container} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
    )
}
