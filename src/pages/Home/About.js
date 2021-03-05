import React, { useState, useEffect } from 'react';
import { aboutData } from '../../components/data';

function About() {
    const [seeMore, setSeeMore] = useState(true);
    const text = seeMore ? aboutData.slice(0, 400) + '...' : aboutData;
    useEffect(() => {
        setSeeMore(true)
    }, [])
    const toggleSeeMore = () => {
        setSeeMore(!seeMore)
    }
    return (
        <div className='about-container'>
            <h3>About Kedai</h3>
            <p>{text}</p>
            <span onClick={toggleSeeMore} className="about-show-btn">
                {!seeMore ? 'See Less' : 'See More'}
            </span>
        </div>
    )
}

export default About
