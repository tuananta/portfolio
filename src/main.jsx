import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'
import Competence from './pages/Competence.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio/>
    <Competence/>
    <Project/>
    <Contact/>
  </StrictMode>,
)
