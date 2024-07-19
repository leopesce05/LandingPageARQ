import './Header.css'
import {useState} from 'react'

import { ClickAwayListener } from '@mui/base/ClickAwayListener';



export default function Header() {

    const [mostrar, setMostrar] = useState(false)

    const handleAwayClick = () => {
        setMostrar(false)
        const cb = document.getElementById('burger');
        cb.checked = !cb.value;
    }

    const navClick = () => {
        setMostrar(false)
        const cb = document.getElementById('burger');
        cb.checked = !cb.value;
    }

    const toggleIzq = () =>{
        if (mostrar) {
            setMostrar(false)
        }else{
            setMostrar(true)
        }
        
    }
    return (
            <nav>
                <a href=""><h2 className='titleFont'>+T Arquitectura</h2></a>
                <div className='navigation'>
                    <ul id='navNR' className='navNRes'>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                    
                    <div className="redes">
                        <a href="https://www.instagram.com/mastarquitectura/" role="button" target='_blank'>
                        <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </span>
                        </a>
                    </div>

                    {/* RESPONSIVE */}
                    <ClickAwayListener onClickAway={()=>handleAwayClick()}> 
                        <div>
                            <label className="burger menu" htmlFor="burger">
                                    <input onChange={()=>toggleIzq()} type="checkbox" id="burger"></input>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                            </label>
                            <div className={`elemento ${mostrar ? 'mostrar' : ''}`} >
                                <ul>
                                    <li><a href="#servicios" onClick={()=>navClick()}>Servicios</a></li>
                                    <li><a href="#proyectos" onClick={()=>navClick()}>Proyectos</a></li>
                                    <li><a href="#contacto" onClick={()=>navClick()}>Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </ClickAwayListener>
                    

                </div>
            </nav>

    )
}