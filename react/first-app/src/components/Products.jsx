import React from 'react'
import './Products.css'
import prod1 from '../assests/strawberry.png'
import prod2 from '../assests/pineapple.png'
import prod3 from '../assests/orange.png'
import prod4 from '../assests/grapes.png'
import prod5 from '../assests/kiwi.png'
import prod6 from '../assests/dragon.png'
import prod7 from '../assests/pomegranate.png'
import prod8 from '../assests/blueberry.png'

const Products = () => {
    return (
        <>
            <div className=" products-container">
                <div className="sec-heading">popular fruits</div>

                <div className="products">
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod1} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Strawberry</span>
                            <span className="price">&#8377; 300/kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod2} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Pineapple</span>
                            <span className="price">&#8377; 120/Kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod3} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Orange</span>
                            <span className="price">&#8377; 150/Kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod4} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Grapes</span>
                            <span className="price">&#8377; 180/Kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod5} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Smoothie Kiwi Fruits</span>
                            <span className="price">&#8377; 220/Kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod6} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Dragon Frits</span>
                            <span className="price">&#8377; 400/Kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod7} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Pomegranate</span>
                            <span className="price">&#8377; 360/Kg</span>
                        </div>
                    </div>
                    <div className=" product-card">

                        <div className="thumbnail">
                            <img src={prod8} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Bluberry</span>
                            <span className="price">&#8377; 60/Kg</span>
                        </div>
                    </div>

                </div>
                <div className="view-all">
                    <button>View More</button>
                </div>
            </div>
        </>
    )
}

export default Products