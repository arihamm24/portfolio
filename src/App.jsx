import Header from './components/header'
import { IoMenu, IoClose } from "react-icons/io5";
import Main from './components/mainBody'
import Footer from './components/footer'
import Navbar from './components/navbar'
import ActionButtons from './components/buttons/actionButtons';
import Socials from './components/buttons/socials';
import "./styles.css"
import { Link } from 'react-router';
import {MediaQuery} from 'react-responsive'
import { useState } from 'react'


function App() {

  const [sidebarOpen, setSidebarOpen] = useState(null);

  return (
    <>
      <MediaQuery minWidth={1024}>
        <Header />
        <div id="gridContainer">
          <Sidebar />
          <Main />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <MobileHeader />
        <div id="gridContainer">
          <Sidebar />
          <Main/>
        </div>  
      </MediaQuery>
      <Footer />
    </>
  );

  function MobileHeader({isOpen}) {
    return(
        <header id="mobileHeader">
            <button id="menuToggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ?
                    (<IoClose/>) :
                    (<IoMenu/>)
                }
            </button>
            <Link to="/" style={
            {textDecoration: 'none', color:"#F5F5FA", alignSelf:"center"}
            }><h1>Ari Hammond</h1></Link>
        </header>
    );
  }

  function Sidebar(){

    if (sidebarOpen) {
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
}

export default App
