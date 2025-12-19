//may only be in mobile
import Navbar from './navbar'
import ActionButtons from './buttons/actionButtons';
import Socials from './buttons/socials';
import { Component, createRef, useRef, useState } from 'react';

 class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <div id="sidebarContent">
                    <div id="profile">
                        <h3>Ari Hammond</h3>
                        <h5 id="blurb">Critcal Media Practitioner, Media Researcher, and Interaction Designer</h5>
                        <Socials/>
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
}
export default Sidebar;