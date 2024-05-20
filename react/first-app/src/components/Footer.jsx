import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">FRUITS-SHOP</div>
                        <div className="text">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don’t look even slightly believable.
                        </div>
                        <div className="social-items">
                            <div className="social-icon1">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="social-icon2">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="social-icon3">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="social-icon4">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Get In Touch</div>
                        <div className="c-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <div className="text">Noida Sector - 16, Uttar Pradesh</div>
                        </div>
                        <div className="c-item">
                            <i className="fa-solid fa-phone"></i>
                            <div className="text">+91 8541806579</div>
                        </div>
                        <div className="c-item">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="text">customercare@fruitshop.com</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">UseFul Links</div>
                        <span className="text">Premium Apple</span>
                        <span className="text">Pineapple</span>
                        <span className="text">Strawberry</span>
                        <span className="text">SignIn</span>
                        <span className="text">Cart</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">Shop</span>
                        <span className="text">About</span>
                        <span className="text">Privacy policy</span>
                        <span className="text">Contact us</span>
                    </div>
                </div>
                <div className="bottam-bar">
                    <div className="bottam-bar-content">
                        <div className="text">
                            Copyright &copy; 2024, FRUITSHOP.COM, All Rights Reserved
                        </div>
                        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=" " />
                    </div>
                </div>
            </footer>

            <div className='footer-btn'>
                <div className='home-button'>
                    <a href='#'>
                        <span>⇧</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer