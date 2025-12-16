//may only be in mobile
import Navbar from './navbar'
import ActionButtons from './actionButtons';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
function Sidebar() {

    return (
        <div id="sidebar">
            <div id="sidebarContent">
                <div id="profile">
                    <h3>Ari Hammond</h3>
                    <h5 id="blurb">Critcal Media Practitioner, Media Researcher, and Interaction Designer</h5>
                    <div id="socials">
                        <a href="https://www.github.com/arihamm24" target='_blank'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/ari-hammond-01a77327a/" target='_blank'><FaLinkedin /></a>
                    </div>
                </div>
                <hr />
                <div id="sidebarNavbar">
                    <h3>Menu</h3>
                    <Navbar />
                </div>
                <hr />
                <ActionButtons/>
            </div>
        </div>
    );

}
export default Sidebar;