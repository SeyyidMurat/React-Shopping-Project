import React from 'react'
import { Link as a } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import IconBtn from '../Elements/IconBtn';
const Nav = ({ toggle, setToggle }) => {

    const navbarClose = () => {
        document.body.style.overflow = '';
        setToggle(!toggle)

    }

    return (
        <nav className={`navbar__list ${toggle === true ? "nav-open" : "nav-close"}`}>
            <ul className='navbar__items'>
                <IconBtn className="navbar__close-btn" onClick={navbarClose} ><MdClose /> </IconBtn>
                <li className='navbar__item'>
                    <a href='/' className='navbar__link'>
                        Anasayfa
                    </a>
                </li>
                <li className='navbar__item'>
                    <a href="#product-section" className='navbar__link' onClick={navbarClose}>
                        Ürünler
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
