import React from 'react'
import './Navbar.css'
import computer from '../../assets/hero/computer_2_cool-0.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navHeader">
                <img src={computer} alt="windows 95 computer icon" />
                <h1>Ari Hammond</h1>
            </div>
            <ul className="navMenu">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar