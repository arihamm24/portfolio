import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'

function App() {

  return <div>
    <Navbar/>
    <Hero />
    <About />
  </div>;

}

export default App
