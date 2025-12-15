import Navbar from './navbar'

function Header() {
    return (
        <header>
        <h1>Ari Hammond - Portfolio</h1>
        <div id="headerNavbar">
            <Navbar />
        </div>
        <div id="headerButtons">
            <button><a href="mailto:ahammmond43@gatech.edu">Contact</a></button>
            <button><a href="././public/documents/Hammond_Ari_Resume.pdf" type="application.pdf" download>Download Resume</a></button>
            <button><a href="#" type="application.pdf" download>Download Academic CV</a></button>
        </div>
        </header>
    );
}
export default Header