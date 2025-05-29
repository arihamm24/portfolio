import React from 'react'
import './Navbar.css'
import computer from '../../assets/projects/computer_2_cool-0.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navHeader">
                    <img src={computer} alt="windows 95 computer icon" />
                    <h1>Ari Hammond</h1>
                </Link>
                <ul className="navMenu">
                    <Link to="/" className="navItem">Home</Link>
                    <Link to="/about" className="navItem">About</Link>
                    <Link to="/projects" className="navItem">Projects</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar