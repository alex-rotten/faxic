import { useState } from 'react';


import './Header.css'

import logo from '../../assets/logo.svg';


export const Header = () => {

    const [isActive , setIsActive] = useState(false)

    const handleClickActive = () => {
        setIsActive(!isActive)
    }

    return (
        <header className='header'>
            <div className='header__container'>
                <a className="header__link" href="#">
                    <img src={logo} alt="logo" className="header__image" />
                </a>
                <nav className="menu burger">
                    <ul className="list">
                        <li className="list__item">
                            <a className="list__link" href="#">Home</a>
                        </li>
                        <li className="list__item">
                            <a className="list__link" href="#">Products</a>
                        </li>
                        <li className="list__item">
                            <a className="list__link" href="#">Gallery</a>
                        </li>
                        <li className="list__item">
                            <a className="list__link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}