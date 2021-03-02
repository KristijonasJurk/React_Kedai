import React from 'react'
import { mainGrid } from '../../components/data'

function Grid() {
    return (
        <div className='grid-container'>
            {mainGrid.map((element, index) => {
                const { src, title, text } = element;
                return (
                    <div key={index} className={`element element${index}`}>
                        <img src={src} alt={title} />
                        { title && <div className="gridFooter">
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </div>
                        }
                    </div>
                )
            })}

        </div>
    )
}

export default Grid
