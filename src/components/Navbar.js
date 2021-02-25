import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link to='/'>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/womens'>
                            Women's
                        </Link>
                    </li>
                    <li>
                        <Link to='/mens'>
                            Men's
                        </Link>
                    </li>
                    <li>
                        <Link to='/accessories'>
                            Accessories &#38; Lifestyle
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar