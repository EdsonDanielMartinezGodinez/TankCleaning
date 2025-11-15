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
import camasutra from "./resources/camasutra.png"
import hapreton from "./resources/apreton.jpeg"
import mirar from "./resources/mirar.jpeg"
import offshore from "./resources/ejofshore.jpeg"
import marcador from "./resources/marcador.png"
import mundo from "./resources/mundo (1).png"
import junta from "./resources/junta.jpg"
import casco from "./resources/casco.png"
import mano from "./resources/mano.png"
import calidad from "./resources/calidad.png"
import whats from "./resources/wtasapi.png"
import tel from "./resources/telefono.png"
import mail from "./resources/sobre.png"
import ink from "./resources/linkedin.png"


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
                <div className='frase'>
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

            <article className='AboutUs'>
                <section className='titulo maxwidth'>
                    <h2>¿Quienes somos?</h2>
                    <div className='linea'></div>
                </section>

                <section className='conocenos maxwidth'>
                    <div className='Mis'>
                        <img className='imagen' src={hapreton} alt="Historia de Goitsa"/>
                        <div className='subtitulo'>
                            <div className='sub-subtitulo'>
                                <img id='simbolos' src={camasutra} alt="Libro"/>
                                <p>Nuestra Historia</p>
                            </div>
                            <p className='pPadding'>GRUPO GOITSA TECNICOS Y CONSULTORES S.A. DE C.V., 
                            es una empresa 100% mexicana fundada en el año 2013, 
                            ubicada en Ciudad del Carmen, Campeche, con actividad a nivel nacional.</p>
                        </div>
                    </div>
                    <div className='Mis reverse'>
                        <img className='imagen' src={mirar} alt="Mision de Goitsa"/>
                        <div className='subtitulo'>
                            <div className='sub-subtitulo'>
                                <img id='simbolos' src={marcador} alt="Lista"/>
                                <p>Nuestra Mision</p>
                            </div>
                            <p className='pPadding'>Solucionar las necesidades y retos de nuestros clientes mediante servicios rentables, 
                               sustentables e innovadores, con altos estándares de calidad, creatividad y responsabilidad social, 
                               generando valor para nuestra gente, clientes y accionistas.</p>
                        </div>
                    </div>
                    <div className='Mis'>
                        <img className='imagen' src={offshore} alt="Historia de Goitsa"/>
                        <div className='subtitulo'>
                            <div className='sub-subtitulo'>
                                <img id='simbolos' src={mundo} alt="Mundo"/>
                                <p>Nuestra Vision</p>
                            </div>
                            <p className='pPadding'>Ser una empresa líder en ingeniería, asesoría, gestión, 
                               capacitación y mantenimiento en la industria petrolera, marítima y comercial, 
                               desarrollando y operando proyectos sólidos, rentables y diversificados.</p>
                        </div>
                    </div>
                </section>

                <section className='socialProve maxwidth'>
                    <img id="empresarios" src={junta} alt="Imagen de empresarios" />
                    <div className='overlay2'></div>

                    <p className='SubtConfianza'>¿Por qué confiar en nosotros?</p>
                    <div className='confianzas'>
                        <div className='elementoConfianza'>
                            <img className='confi' src={mano} alt="Mano con plantita"/>
                            <p>Compromiso con la sostenibilidad</p>
                        </div>

                        <div className='elementoConfianza'>
                            <img className='confi' src={calidad} alt="Mucha calidad"/>
                            <p>Certificaciones: [ISO 9001, a confirmar].</p>
                        </div>

                        <div className='elementoConfianza'>
                            <img className='confi' src={casco} alt="Casco de seguridad"/>
                            <p>Seguridad de vanguardia</p>
                        </div>
                    </div>
                </section>
            </article>
            <article></article>
            <article></article>
        </main>
        <footer>
            <section className='piePrincipal'>
                <div className='isologo'>
                    <img id='logoitsa' src={logo} alt="Goitsa Logo"/>
                    <p className='grupogoitsa'><b>Grupo Goitsa</b></p>
                </div>
                <div className='Navegar direc'>
                    <p className='footP'>Navegar</p>
                    <a href=""><button className='navBut paddSp'>Servicios</button></a>
                    <a href=""><button className='navBut paddSp'>Nosotros</button></a>
                    <a href=""><button className='navBut paddSp'>Nuestra Experiencia</button></a>
                    <a href=""><button className='navBut paddSp'>Contactanos</button></a>
                </div>
                <div className='Enlaces direc'>
                    <p className='footP'>Enlaces</p>
                    <a href=""><button className='navBut paddSp'>Politicas de Privacidad</button></a>
                    <a href=""><button className='navBut paddSp'>Aviso Legal</button></a>
                    <a href=""><button className='navBut paddSp'>Terminos y Condiciones</button></a>
                    <a href=""><button className='navBut paddSp'>Politica de Cookies</button></a>
                </div>
                <div className='Contacto direc'>
                    <p className='footP' id='sinpad'>Contacto</p>
                    <div className='linkedin'>
                        <img src={ink} alt="Linkedin Icon" />
                        <a href=""><button className='navBut paddSp'>Grupo Goitsa</button></a>
                    </div>
                    <div className='e-mail'>
                        <img src={mail} alt="E-mail Icon" />
                        <a href=""><button className='navBut paddSp'>grupo.goitsa@outlook.com</button></a>
                    </div>
                    <div className='tel'>
                        <img src={tel} alt="Telefono Icon" />
                        <a href=""><button className='navBut paddSp'>+52 (938) 1030740</button></a>
                    </div>
                    <div className='wats'>
                        <img src={whats} alt="Whatsapp Icon" />
                        <a href=""><button className='navBut paddSp'>+52 (938) 1030740</button></a>
                    </div>
                </div>
            </section>
            <section className='copy'>
                <p>@ 2025 Grupo Goitsa All rights reserved</p>
            </section>
        </footer>
    </Fragment>
  )
}
