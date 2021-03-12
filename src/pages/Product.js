import React, { useState, useEffect } from 'react'
import { womensBrowse, womensProducts } from '../components/data';
import { Link, useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const specificProduct = womensProducts.find((product) => product.id === parseInt(id));
        setData(specificProduct)
    }, [])

    return (
        <div className='product-whole'>
            <p>Women's <span>/</span> Tops</p>
            <div className="product-container">
                <section className="product-photo-container">
                    <div className="product-vertical-slide">
                        {data.img.map((image, index) => {
                            return (
                                <img src={image} key={index} alt={data.title} />
                            )
                        })}
                    </div>
                    <div className="product-image-container">
                        <img src={data.img[0]} alt={data.title} />
                    </div>
                </section>
                <section className="product-info-container">
                    <h2>{data.title}</h2>
                    <h2>€{data.price}</h2>
                    <div className="product-colors-container">
                        <p>Colors <span>{data.color}</span></p>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Product
