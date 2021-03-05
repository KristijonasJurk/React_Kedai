import React from 'react'
import Grid from './Grid';
import Slide1 from './Slide1';
import Community from './Community';
import About from './About';

const Home = () => {
    return (
        <main className='main'>
            <Grid />
            <Slide1 />
            <Community />
            <About />
        </main>
    )
}

export default Home
