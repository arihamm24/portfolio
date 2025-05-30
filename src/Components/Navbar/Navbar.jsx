import React, {useState} from 'react'
import './Navbar.css'
import computer from '../../assets/projects/computer_2_cool-0.png'
import { Link } from 'react-router-dom'
import menu from '../../assets/navbar/menu.svg'

const Navbar = () => {
    function mobileNav() {
        alert("Mobile Navbar not functional");
    }
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navHeader">
                    <img src={computer} alt="windows 95 computer icon" />
                    Ari Hammond
                </Link>
                <div className="navMenu">
                    <img src={menu} onClick={mobileNav} alt="menu hamburger icon white" className="menuIcon"/>
                    <ul className="menuItems">
                        <li><Link to="/" className="navItem">Home</Link></li>
                        <li><Link to="about" className="navItem">About</Link></li>
                        <li><Link to="/projects" className="navItem">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar