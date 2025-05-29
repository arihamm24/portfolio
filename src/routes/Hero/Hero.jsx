import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import profile from '../../assets/hero/profile.jpeg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="heroContent">
                <div className="heroText">
                    <h1><span className="heroName">I'm Ari Hammond,</span> developer and multimedia storyteller</h1>
                    <p>I study Computational Media at Georgia Tech in Atlanta, GA, where I've developed skills in interaction design, digital media, film and media studies, and mobile development.</p>
                </div>
                <div className="heroButtons">
                    <Link to="/projects" className="heroConnect">
                        See My Work
                    </Link>
                    <Link to="https://drive.google.com/file/d/1Hcytu-s-SGouMR2oXOl57uko_cLx2B25/view?usp=sharing" className="heroResume">
                        View my Resume
                    </Link>
                </div>
            </div>
            <img src={profile} className="heroImg" alt="A masculine African-American person with short hair and black glasses in a short-sleeved black collared shirt. Their arms are crossed"/>
        </div>
    )
}

export default Hero