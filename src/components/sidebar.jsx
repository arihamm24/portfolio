//may only be in mobile
import Navbar from './navbar'
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
function Sidebar() {

    return (
        <div id="sidebar">
            <div>
                <div id="profile">
                    <img src="/ari.jpg" alt="photo of Ari Hammond"/>
                    <h3>Ari Hammond</h3>
                    <h5 id="blurb">Critcal Media Practitioner, Media Researcher, and Interaction Designer</h5>
                    <div id="socials">
                        <a href="https://www.github.com/arihamm24" target='_blank'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/ari-hammond-01a77327a/" target='_blank'><FaLinkedin /></a>
                    </div>
                    
                </div>
                <div id="sidebarNavbar">
                    <h3>Go to:</h3>
                    <Navbar />
                </div>
            </div>
            <div id="returnButton">
                <button><a href="#gridContainer">Back to Top</a></button>
            </div>
        </div>
    );

}
export default Sidebar;