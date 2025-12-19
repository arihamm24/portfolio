import { IoMenu } from "react-icons/io5";
import { Link } from "react-router";
import Sidebar from "./sidebar";
export default function MobileHeader() {
    return(
        <header id="mobileHeader">
            <button id="menuToggle" onClick={toggleMenu}><IoMenu/></button>
            <Link to="/" style={
            {textDecoration: 'none', color:"#F5F5FA", alignSelf:"center"}
            }><h1>Ari Hammond</h1></Link>
        </header>
    );
}

function toggleMenu() {
    
}