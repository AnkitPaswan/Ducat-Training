
//30/05/24

//img implementation


import React from 'react'
import img2 from './images/ss2.png'

export default function App() {
    return (
        <div>
            {/* public folder */}
            <img src="/images/ss1.png" alt="" />

            <hr />

            {/* using import */}
            <img src={img2} alt="" />

            <hr />

            {/* dynamic import */}
            {/* <img src={require('./images/ss3.png')} alt="" srcSet='' /> */}
        </div>
    )
}
