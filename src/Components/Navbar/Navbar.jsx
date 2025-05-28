import React from 'react'
import './Navbar.css'
import computer from '../../assets/projects/computer_2_cool-0.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navHeader">
                <img src={computer} alt="windows 95 computer icon" />
                <h1>Ari Hammond</h1>
            </div>
            <ul className="navMenu">
                <li className="navItem">Home</li>
                <li className="navItem">About</li>
                <li className="navItem">Projects</li>
                <li className="navItem">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar