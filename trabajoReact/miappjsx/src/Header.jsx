import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import fotoPersonal from './assets/fotopersonal.png'
import './App.css'

function Header() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={fotoPersonal} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Fernando Gutierrez Rojas</h1>
          <p>
            Aprendiz ADSO - SENA
          </p>
        </div>
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default Header
