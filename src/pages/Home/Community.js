import React from 'react';
import photo1 from '../../img/community/1.png';
import photo2 from '../../img/community/2.png';
import photo3 from '../../img/community/3.png';
import banner from '../../img/community/0.png';

const communityData = [
    { id: 1, img: photo1, text: 'Turn your back to racism. Josh Pozzan the Black Lives Matter movement in detail.' },
    { id: 2, img: photo2, text: `Stacey Grammar: 'Dress to impress, with the latest Lindex dress!'` },
    { id: 3, img: photo3, text: `Raised in the streets: An inspiring story of a former NFL player. Life's never as easy as it seems...` }
]

function Community() {
    return (
        <>
            <img src={banner} alt="banner" className='community-banner' />
            <div className='community-container'>
                {communityData.map((element) => {
                    const { id, img, text } = element;
                    return (
                        <article key={id} className="community-element">
                            <img src={img} alt="community" />
                            <div className="community-footer">
                                <h4>{text}</h4>
                                <a href="#">
                                    Read More
                            </a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </>
    )
}

export default Community
