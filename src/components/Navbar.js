import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo/logo.png';
import { IoBagOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa'
import { navLinks } from './data'

const Navbar = () => {

    const [showNav, setShowNav] = useState(true)
    const [isHidden, setIsHidden] = useState(null)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const navContainerRef = useRef(null)

    const checkSize = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        if (screenSize < 860) {
            setIsHidden(true)
            setShowNav(false)
        } else {
            setIsHidden(false)
            setShowNav(true)
        }
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, [screenSize]);

    useEffect(() => {
        if (showNav) {
            navContainerRef.current.style.height = `65px`;
        } else {
            navContainerRef.current.style.height = `0px`;
            navContainerRef.current.style.overflow = `hidden`;
        }
    }, [showNav])
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link to='/' className='nav-link logo-link'>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <div className='nav-links-container' ref={navContainerRef}>
                    <ul className="nav-links">
                        {navLinks.map((singleLink, index) => {
                            const { link, text } = singleLink;
                            return (
                                <li key={index}>
                                    <Link to={link} className='nav-link'>
                                        {text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <section className='search'>
                    <button className={`${isHidden ? 'nav-toggle' : 'nav-toggle hidden'}`} onClick={() => setShowNav(!showNav)}>
                        <FaBars />
                    </button>
                    <Link to='/cart' className='cart-link'>
                        <IoBagOutline />
                    </Link>
                </section>
            </div>
        </nav >
    )
}

export default Navbar