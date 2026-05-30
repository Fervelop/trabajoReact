import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import fotoPersonal from './assets/fotopersonal.png'
import './App.css'

function InfoPersonal() {
  return (
    <>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Presentación Personal</h2>
          <p>Tengo 23 años, soy licenciado en educación física, trabajo actualmente como analista de operaciones digitales. <br />
            Actualmente vivo en Bogotá. <br />
            <strong>Mis datos personales: </strong><br />
              <li>Telefono: 311 886 2934</li>
              <li>Correo: fernandogutierrezrojas09@gmail.com</li>
          </p>
        </div>
      </section>
    </>
  )
}

export default InfoPersonal
