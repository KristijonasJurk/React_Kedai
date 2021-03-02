import React from 'react'
import { mainGrid1, mainGrid2 } from '../../components/data'

function Grid() {
    return (
        <div className='grid-container'>
            <img class='main-grid-banner' src={mainGrid1[0].src} alt="banner" />
            <section className="grid-left">
                {mainGrid1.map((element, index) => {
                    const { src, title, text } = element;
                    return (
                        <div key={index} className={`element element${index}`}>
                            {title && <div className="gridFooter">
                                <img src={src} alt={title} />
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                            }
                        </div>
                    )
                })}
            </section>
            <section className="grid-right">
                {mainGrid2.map((element, index) => {
                    const { src, title, text } = element;
                    return (
                        <div key={index} className={`element element${index + 5}`}>
                            <img src={src} alt={title} />
                            { title && <div className="gridFooter">
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                            }
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Grid
