import React, { Fragment } from 'react'
import './Tank.css'
import logo from './resources/logo.png'
import row from "./resources/row.png"
import ejemplo from "./resources/example.mp4"
import hucha from "./resources/hucha.png"
import apreton from "./resources/apreton.png"
import reloj from "./resources/reloj.png"
import confinados from "./resources/confinados.jpeg"
import plataformas from "./resources/plataformas.jpeg"

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
            <article className='services'>
                <section className='titulo maxwidth'>
                    <h2>¿Necesitas limpieza segura y eficiente en tu embarcación o plataforma offshore?</h2>
                    <div className='linea'></div>
                </section>

                <section className='iconos maxwidth'>
                    <div className='figura'>
                        <p className='azulMediocreBold'>Precios competitivos</p>
                        <img id='hucha' src={hucha} alt="Alcancía o hucha"/>
                        <p>Soluciones accesibles sin comprometer la calidad.</p>
                    </div>
                    <div className='figura'>
                        <p className='azulMediocreBold'>Confianza comprobada</p>
                        <img id='apreton' src={apreton} alt="Apretón de manos"/>
                        <p>Respaldados por la industria petrolera nacional.</p>   
                    </div>
                    <div className='figura'>
                        <p className='azulMediocreBold'>Respuesta rápida 24/7</p>
                        <img id='reloj' src={reloj} alt="Un reloj"/>
                        <p>Disponibles en todo momento con rapidez.</p>
                    </div>
                </section>

                <section className='serviceCards maxwidth'>
                    <div className='card'>
                        <img className='serviceImg' src={confinados} alt="Trabajador limpiando espacio confinado"/>
                        <div className='serviceDesc'>
                            <p className='subtitle18'>Limpieza de Espacios Confinados en Embarcaciones</p>
                            <p>Servicio especializado en la limpieza segura de areas confinadas en barcos.</p>
                            <a href=""><button className='ServiceBut'>Conoce Más</button></a>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='serviceImg' src={plataformas} alt="Plataforma offshore"/>
                        <div className='serviceDesc'>
                            <p className='subtitle18'>Limpieza de Espacios Confinados en Embarcaciones</p>
                            <p>Servicio especializado en la limpieza segura de areas confinadas en barcos.</p>
                            <a href=""><button className='ServiceBut'>Conoce Más</button></a>
                        </div>
                    </div>

                </section>

            </article>
            <article className='AboutUs'></article>
            <article></article>
            <article></article>
        </main>
        <footer></footer>
    </Fragment>
  )
}
