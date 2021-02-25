import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo/logo.png';
import { IoBagOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link to='/' className='nav-link'>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/womens' className='nav-link'>
                            Women's
                        </Link>
                    </li>
                    <li>
                        <Link to='/mens' className='nav-link'>
                            Men's
                        </Link>
                    </li>
                    <li>
                        <Link to='/accessories' className='nav-link'>
                            Accessories &#38; Lifestyle
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                </ul>
                <div>
                    <IoBagOutline />
                </div>
            </div>
        </nav>
    )
}

export default Navbar