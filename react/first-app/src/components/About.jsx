import React from 'react'
import './About.css'
import bg from '../assests/bg.png'

const About = () => {
    return (

        <div className="about">
            <div className="abt-heading">About Us</div>
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia soluta earum nihil maxime optio
                    repellendus! Ipsum mollitia provident corrupti iste sed consectetur quod vitae.</p>
                <img src={bg} alt="" />
            </div>
        </div>

    )
}

export default About