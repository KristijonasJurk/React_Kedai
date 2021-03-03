import React from 'react';
import { slide1 } from '../../components/data'

function Slide1() {
    return (
        <div className='slide1-main'>
            <h5>New Arrivals</h5>
            <div className="slide1-container">
                {slide1.map((element, index) => {
                    const { src, text } = element;
                    return (
                        <img src={src} alt="" />
                    )
                })}
            </div>
        </div>
    )
}

export default Slide1
