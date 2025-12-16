import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import CaseStudy from './components/caseStudies/caseStudy.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path='/:id' element={<CaseStudy/>}/>
    </Routes>
    
  </BrowserRouter>,
)
