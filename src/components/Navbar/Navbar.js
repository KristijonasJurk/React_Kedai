import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoBagOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { navLinks } from '../data'
import { useGlobalContext } from '../../context'

import Nav from './Nav'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

const Navbar = () => {
    return (
        <>
            <Nav />
            <Sidebar />
            <Submenu />
        </>
    )
    // old states
    // const [showNav, setShowNav] = useState(true)
    // const [isHidden, setIsHidden] = useState(null)
    // const [screenSize, setScreenSize] = useState(window.innerWidth)
    // const navContainerRef = useRef(null)

    // const checkSize = () => {
    //     setScreenSize(window.innerWidth);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', checkSize);
    //     if (screenSize < 860) {
    //         setIsHidden(true)
    //         setShowNav(false)
    //     } else {
    //         setIsHidden(false)
    //         setShowNav(true)
    //     }
    //     return () => {
    //         window.removeEventListener('resize', checkSize);
    //     };
    // }, [screenSize]);

    // useEffect(() => {
    //     if (showNav) {
    //         navContainerRef.current.style.height = `115px`;
    //         navContainerRef.current.style.transition = `0.5s`;
    //     } else {
    //         navContainerRef.current.style.height = `0px`;
    //         navContainerRef.current.style.overflow = `hidden`;
    //         navContainerRef.current.style.transition = `0s`;
    //     }
    // }, [showNav])
    // return (
    // <nav className='navbar'>
    //     <div className="nav-center">
    //         <Link to='/' className='logo-link'>
    //             <img src={logo} alt="logo" className='logo' />
    //         </Link>
    //         <div className='nav-links-container' ref={navContainerRef}>
    //             <ul className="nav-links">
    //                 {navLinks.map((singleLink, index) => {
    //                     const { page } = singleLink;
    //                     return (
    //                         <li key={index}>
    //                             <Link to='/' className='nav-link'>
    //                                 {page}
    //                             </Link>
    //                         </li>
    //                     )
    //                 })}
    //             </ul>
    //         </div>
    //         <section className='search'>
    //             <button className={`${isHidden ? 'nav-toggle' : 'nav-toggle hidden'}`} onClick={() => setShowNav(!showNav)}>
    //                 <FaBars />
    //             </button>
    //             <Link to='/cart' className='cart-link'>
    //                 <IoBagOutline />
    //             </Link>
    //         </section>
    //     </div>
    // </nav >
}
export default Navbar