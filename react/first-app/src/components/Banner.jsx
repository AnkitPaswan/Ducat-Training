import React from 'react'
import './Banner.css'
import banner from '../assests/banner.png'

const Banner = () => {
    return (

        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>We Deliver Best Organic
                        <span> Fruits</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, dolor id. Pariatur blanditiis animi
                        quae.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">SHOP NOW</div>
                    </div>
                </div>
                <img className="banner-img" src={banner} alt="" />
            </div>
        </div>
    )
}

export default Banner