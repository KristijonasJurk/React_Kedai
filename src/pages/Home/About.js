import React, { useState } from 'react';
import { aboutData } from '../../components/data';

function About() {
    const [seeMore, setSeeMore] = useState(false);
    return (
        <div className='about-container'>
            <h3>About Kedai</h3>
            <p>{aboutData}</p>
        </div>
    )
}

export default About
