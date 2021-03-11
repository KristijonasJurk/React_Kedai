import React, { useRef, useState, useEffect } from 'react';
import { slide1 } from '../../components/data'
import { GrNext, GrPrevious } from 'react-icons/gr';

function Slide1() {
    const containerWidth = useRef(null);
    // are the slide buttons clickable
    const [unactiveNext, setUnactiveNext] = useState(false);
    const [unactivePrev, setUnctivePrev] = useState(true);
    // is cursor over the element
    const [mouseOver, setMouseOver] = useState(-1);
    // screen size monitoring
    const [screenResize, setScreenResize] = useState(window.innerWidth);

    // this useEffect fixes the void that appears when the user expands the screen in slide1
    useEffect(() => {
        window.addEventListener('resize', prevSlide);
        return () => {
            window.removeEventListener('resize', prevSlide);
        }
    }, [screenResize, setScreenResize])



    const prevSlide = () => {
        containerWidth.current.style.transform = `translateX(0px)`;
        setUnactiveNext(false);
        setUnctivePrev(true);
    }
    const nextSlide = () => {
        const width = containerWidth.current.getBoundingClientRect().width;
        containerWidth.current.style.transform = `translateX(-${width}px)`;
        setUnactiveNext(true);
        setUnctivePrev(false);
    }

    return (
        <div className='slide1-main'>
            <h5>New Arrivals</h5>
            <div className="slide1-view">
                <div className="slide1-container" ref={containerWidth}>
                    {/* <div className="slide1-window"> */}
                    {slide1.map((element) => {
                        const { id, src, text, src2 } = element;
                        return (
                            <article key={id} className='slide1-element'
                                onMouseEnter={() => setMouseOver(id)}
                                onMouseLeave={() => setMouseOver(-1)}
                            >
                                <div className='slide1-image-container'>
                                    <img src={`${mouseOver === id ? src2 : src}`} alt="" />
                                    {/* onMousever a class of hidden is added to the specific id element */}
                                    <div className={`slide1-image-footer ${mouseOver === id ? '' : 'hidden'}`}>
                                        <p className='slide1-btn'>Quick Shop</p>
                                    </div>
                                </div>
                                <p>{text}</p>
                            </article>
                        )
                    })}
                    {/* </div> */}
                </div>
                <div className="slide1-buttons">
                    <button className='slide1-prev-button slide1-button' disabled={unactivePrev} onClick={prevSlide}>
                        <GrPrevious opacity={unactivePrev ? '0.4' : '1'} />
                    </button>
                    <button className='slide1-next-button slide1-button' disabled={unactiveNext} onClick={nextSlide}>
                        <GrNext opacity={unactiveNext ? '0.4' : '1'} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slide1
