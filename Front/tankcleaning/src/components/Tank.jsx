import React, { Fragment } from 'react'
import './Tank.css'
import logo from './resources/logo.png'

export const Tank = () => {
  return (
    <Fragment>
        <header>
            <section className='maxwidth cabeza'>
                <div className='isologo'>
                    <img id='logoitsa' src={logo} alt="Goitsa"/>
                    <p className='grupogoitsa'><b>Grupo Goitsa</b></p>
                </div>
                <nav>
                    <a href=""><button>Inicio</button></a>
                    <a href=""><button>Servicio</button></a>
                    <a href=""><button>Nosotros</button></a>
                    <a href=""><button>Contacto</button></a>
                </nav>
            </section>
            <section>
                <div>
                    <h1>Cuidamos cada detalle con limpieza experta y segura en espacios confinados y plataformas offshore</h1>
                </div>
                <div className='cotiza&contacto'>
                    <a href=""><button>cotiza ahora</button></a>
                    <a href=""><button>Contacta ahora</button></a>
                </div>
            </section>
        </header>
        <main></main>
        <footer></footer>
    </Fragment>
  )
}
