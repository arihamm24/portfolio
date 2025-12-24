import Header from './components/header'
import { IoMenu, IoClose } from "react-icons/io5";
import Main from './components/mainBody'
import Footer from './components/footer'
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
      <MediaQuery minWidth={900}>
        <Header />
        <div id="gridContainer">
          <Sidebar deviceMode={"desktop"}/>
          <Main />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <MobileHeader />
        <div id="gridContainer">
          <Sidebar deviceMode={"mobile"}/>
          <Main/>
        </div>  
      </MediaQuery>
      <Footer />
    </>
  );

  function MobileHeader() {
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

  function Navbar() {
    return (
        <nav>
            <a href="#content" onClick={() => setSidebarOpen(!sidebarOpen)}>About</a>
            <a href="#projects" onClick={() => setSidebarOpen(!sidebarOpen)}>Projects</a>
            <a href="#research" onClick={() => setSidebarOpen(!sidebarOpen)}>Research</a>
        </nav>
    );
}

  function Sidebar({deviceMode}){

    if (deviceMode == "desktop") {
      setSidebarOpen(true);
    }

    if (sidebarOpen) {
        return (
          <>
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
            <div className="overlay"></div>
          </>
        );
    }
  }
}

export default App
