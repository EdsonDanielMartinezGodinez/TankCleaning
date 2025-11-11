import React, { Fragment } from 'react'
import './Tank.css'
import logo from './resources/logo.png'
import row from "./resources/row.png"
import ejemplo from "./resources/example.mp4"

export const Tank = () => {
  return (
    <Fragment>
        <header>
            <section className='cabeza  maxwidth '>
                <div className='overlay'></div>
                <video className="videoBack" src={ejemplo} autoPlay={true} muted={true} loop={true}></video>
                <div className='isologo'>
                    <img id='logoitsa' src={logo} alt="Goitsa Logo"/>
                    <p className='grupogoitsa'><b>Grupo Goitsa</b></p>
                </div>
                <nav className='headNav'>
                    <a href=""><button className='navBut'>Inicio</button></a>
                    <a href=""><button className='navBut'>Servicio</button></a>
                    <a href=""><button className='navBut'>Nosotros</button></a>
                    <a href=""><button className='navBut'>Contacto</button></a>
                </nav>
                <img id="hamburguesa" src={row} alt="Icono de Menu" />
            </section>
            <section className='cabezaBody maxwidth '>
                <div>
                    <h1>Cuidamos cada detalle con <b className='textYellow'>limpieza</b> experta y segura en <b className='textYellow'>espacios confinados</b> y <b className='textYellow'>plataformas offshore</b></h1>
                </div>
                <div className='cotizacontacto'>
                    <a href=""><button className='yellowBut'>Cotiza ahora</button></a>
                    <a href=""><button className='invisibleBut'>Contacta ahora</button></a>
                </div>
            </section>
        </header>
        <main>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </main>
        <footer></footer>
    </Fragment>
  )
}
