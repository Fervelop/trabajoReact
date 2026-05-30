import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import InfoPersonal from './InfoPersonal.jsx'
import Hobbies from './Hobbies.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <InfoPersonal />
    <Hobbies />
    <Footer />
  </StrictMode>,
)
