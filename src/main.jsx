import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//REACT ROUTER NAVBAR TUTORIAL 5/28/25
import { BrowserRouter } from 'react-router-dom'

//import "@fontsource/handjet";
//import "@fontsource/abel";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/** Client-side routing, change pages w/o refresh */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
