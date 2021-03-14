import React, { useState, useEffect } from 'react'
import { womensBrowse, womensProducts } from '../components/data';
import { Link, useParams } from 'react-router-dom';

const shoeSizes = [38, 39, 40, 41, 42, 43, 44, 45];
const clothesSizes = ['XS', 'S', 'M', 'L', 'XL']

function Product() {
    const { id } = useParams();
    const [data,] = useState(womensProducts.find((product) => product.id === parseInt(id)));

    const [secondColor, setSecondColor] = useState(false)

    useEffect(() => {

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
                    <section className="product-info-main">
                        <h2>{data.title}</h2>
                        <h2>€{data.price}</h2>
                        <div className="product-colors-container">
                            <p className='product-bold-text'>Color: {data.color.map((clr, index) =>
                            // if the color is an array, it renders multiple
                            {
                                return (
                                    <span>{clr}</span>
                                )
                            })}</p>
                            <div style={data.img2 ? { backgroundColor: data.color[0] } : { backgroundColor: data.color }} className="product-color product-color2" onClick={() => setSecondColor(false)}></div>
                            {data.img2 && <div style={{ backgroundColor: data.color[1] }} className="product-color product-color2" onClick={() => setSecondColor(true)}></div>}
                        </div>
                        <div className="product-size-container">
                            <p className='product-bold-text'>Size*</p>
                            <div className="product-sizes">
                                {data.categories.includes("shoes") ?
                                    // for shoes display shoe sizes, and for clothes clothe sizes
                                    shoeSizes.map((size, i) => {
                                        return (
                                            <div>{size}</div>
                                        )
                                    })
                                    :
                                    clothesSizes.map((size, i) => {
                                        return (
                                            <div>{size}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="quantity-container">
                            <p className='product-bold-text'>Qty*</p>
                            <select name="product sort" id="product-sort">
                                <option value="1units">1</option>
                                <option value="2units">2</option>
                                <option value="3units">3</option>
                                <option value="4units">4</option>
                                <option value="5units">5</option>
                                <option value="6units">6</option>
                                <option value="7units">7</option>
                                <option value="8units">8</option>
                                <option value="9units">9</option>
                                <option value="10units">10</option>
                            </select>
                        </div>
                        <button className="product-add-to-cart-btn">
                            Add to Cart
                    </button>
                    </section>
                    <section className="product-info-details">
                        <h4>Details</h4>
                        <p>{data.text}</p>
                        <b>Material</b>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Product
