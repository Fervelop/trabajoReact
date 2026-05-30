import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import fotoPersonal from './assets/fotopersonal.png'
import './App.css'

function Hobbies() {
  return (
    <>
      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Mis Hobbies</h2>
            <li>Ir al gimnasio</li>
            <li>Escuchar música</li>
            <li>Viajar en moto</li>
            <li>Conocer lugares nuevos</li>
        </div>
      </section>
    </>
  )
}

export default Hobbies
