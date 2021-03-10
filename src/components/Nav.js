import React from 'react'
import logo from '../img/logo/logo.png';
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context';

const Navbar = () => {
    const { openSidebar, closeSubmenu, openSubmenu } = useGlobalContext()

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom })
    }
    const HandleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
    }
    return <nav className='nav' onMouseOver={HandleSubmenu}>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="stripe" className='nav-logo' />
                <button className="btn toggle-btn" onClick={openSidebar}>
                    <FaBars />
                </button>
            </div>
            <ul className="nav-links">
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>Home</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>Women's</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>Men's</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>Lifestyle</button>
                </li>
            </ul>
            <button className="btn signin-btn">Sign in</button>
        </div>
    </nav>
}

export default Navbar
