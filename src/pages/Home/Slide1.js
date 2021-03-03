import React, { useRef, useState } from 'react';
import { slide1 } from '../../components/data'
import { GrNext, GrPrevious } from 'react-icons/gr';

function Slide1() {
    const containerWidth = useRef(null);
    const [index, setIndex] = useState(0);
    const [unactiveNext, setUnactiveNext] = useState(false);
    const [unactivePrev, setUnctivePrev] = useState(true);


    const prevSlide = () => {
        console.log('prev');
        const width = containerWidth.current.getBoundingClientRect().width;
        containerWidth.current.style.transform = `translateX(0px)`;
        setUnactiveNext(false);
        setUnctivePrev(true);
    }
    const nextSlide = () => {
        console.log('next');
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
                    {slide1.map((element, index) => {
                        const { src, text } = element;
                        return (
                            <article key={index} className='slide1-element'>
                                <div className='slide1-image-container'>
                                    <img src={src} alt="" />
                                    <div className="slide1-image-footer">
                                        <p>Quick Shop</p>
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
