import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri'

const Error = () => {
    return (
        <section className='error-page'>
            <div className="error-container">
                <h4>Oops! It's a dead end!</h4>
                <Link to='/' className='back-home-btn'>
                    back home
                <RiArrowGoBackLine />
                </Link>
            </div>
        </section>
    )
}

export default Error
