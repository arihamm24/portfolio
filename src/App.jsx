import { useState } from 'react'
import styles from './App.module.css'
import {Routes, Route} from "react-router";
import Navbar from './Components/Navbar/Navbar';
import Hero from './routes/Hero/Hero';
import About from './routes/About/About'
import Projects from './routes/Projects/Projects'
import Photos from './routes/Projects/Photos'
import Dev from './routes/Projects/Dev'
import Writing from './routes/Projects/Writing'

function App() {

  return <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/About" element={<About />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/projects/photography" element={<Photos/>} />
      <Route path="/projects/publications" element={<Writing/>} />
      <Route path="/projects/development" element={<Dev/>} />
    </Routes>
 
  </div>;

}

export default App
