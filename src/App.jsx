import Header from './components/header'
import MobileHeader from './components/mobileHeader'
import Sidebar from './components/sidebar'
import Main from './components/mainBody'
import Footer from './components/footer'
import "./styles.css"
import {MediaQuery} from 'react-responsive'
import { useState } from 'react'

function App() {
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
}

export default App
