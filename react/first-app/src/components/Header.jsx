import React from 'react'
import './Header.css'
import logo from '../assests/logo.png'

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    <img className="logo" src={logo} alt="Fruit Logo" />
                </ul>
                <div className="center">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
                <div className="right">
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <span className="cart-icon">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>5</span>
                    </span>
                    <li className="sign">
                        <i className="fa-solid fa-user"></i>
                    </li>
                </div>
            </div>
        </header>
    )
}

export default Header