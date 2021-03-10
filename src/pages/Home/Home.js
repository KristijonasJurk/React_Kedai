import React from 'react'
import Grid from './Grid';
import Slide1 from './Slide1';
import Community from './Community';
import About from './About';
import { useGlobalContext } from '../../context'

const Home = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <main className='main' onMouseOver={closeSubmenu}>
            <Grid />
            <Slide1 />
            <Community />
            <About />
        </main>
    )
}

export default Home
