import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.png';
import { FaBars } from 'react-icons/fa'
import { IoBagOutline } from 'react-icons/io5';
import { useGlobalContext } from '../../context';
// pages

const Navbar = () => {
    const { openSidebar, closeSubmenu, openSubmenu, amount } = useGlobalContext()

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom;
        openSubmenu(page, { center, bottom })
    }
    const HandleSubmenu = (e) => {
        if (!e.target.classList.contains('nav-link')) {
            closeSubmenu()
        }
    }
    return <nav className='navbar' onMouseOver={HandleSubmenu}>
        <div className="nav-center">
            <Link to='/' className='logo-link'>
                <img src={logo} alt="logo" className='logo' />
            </Link>
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li>
                        <Link to='/' className="nav-link" onMouseOver={displaySubmenu}>Home</Link>
                    </li>
                    <li>
                        <Link to='/kedai/pages/womens' className="nav-link" onMouseOver={displaySubmenu}>Women's</Link>
                    </li>
                    <li>
                        <Link to='/kedai/pages/mens' className="nav-link" onMouseOver={displaySubmenu}>Men's</Link>
                    </li>
                    {/* <li>
                        <Link to='/kedai/pages/sneekers' className="nav-link" onMouseOver={displaySubmenu}>Sneekers</Link>
                    </li> */}
                </ul>
            </div>
            <section className='search'>
                <button className="nav-toggle" onClick={openSidebar}>
                    <FaBars />
                </button>
                <Link to='/kedai/pages/cart' className='cart-link'>
                    <IoBagOutline />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </Link>
            </section>
        </div>
    </nav>
}

export default Navbar