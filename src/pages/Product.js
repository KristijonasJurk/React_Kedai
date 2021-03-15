import React, { useState } from 'react'
import { womensProducts } from '../components/data';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context'

const shoeSizes = [38, 39, 40, 41, 42, 43, 44, 45];
const clothesSizes = ['XS', 'S', 'M', 'L', 'XL']

function Product() {
    const { closeSubmenu } = useGlobalContext();

    const { id } = useParams();
    const [data,] = useState(womensProducts.find((product) => product.id === parseInt(id)));

    const [secondColor, setSecondColor] = useState(false)

    const [mainPhoto, setMainPhoto] = useState(0);

    const [pickedSize, setPickedSize] = useState(0)

    return (
        <div className='product-whole' onMouseOver={closeSubmenu}>
            <div className="product-category-location">
                <p>{data.categories[data.categories.length - 1]}</p> <span>/</span><p> {data.categories[0]}</p>
            </div>
            <div className="product-container">
                <section className="product-photo-container">
                    {secondColor
                        ?
                        <div className="product-vertical-slide">
                            {data.img2.map((image, index) => {
                                return (
                                    <img src={image} key={index} alt={data.title} onClick={() => setMainPhoto(index)} />
                                )
                            })}
                        </div>
                        :
                        <div className="product-vertical-slide">
                            {data.img.map((image, index) => {
                                return (
                                    <img src={image} key={index} alt={data.title} onClick={() => setMainPhoto(index)} />
                                )
                            })}
                        </div>
                    }
                    <div className="product-image-container">
                        {secondColor
                            ?
                            <img src={data.img2[mainPhoto]} alt={data.title} />
                            :
                            <img src={data.img[mainPhoto]} alt={data.title} />
                        }
                    </div>
                </section>
                <section className="product-info-container">
                    <section className="product-info-main">
                        <h2>{data.title}</h2>
                        <h2>€{data.price}</h2>
                        <div className="product-colors-container">
                            <p className='product-bold-text'>Color: {data.img2
                                ?
                                data.color.map((clr, index) => {
                                    return (
                                        <span>{clr}</span>
                                    )
                                })
                                :
                                <span>{data.color}</span>
                            }</p>
                            <div className="product-color-bubbles">
                                <div style={data.img2 ? { backgroundColor: data.color[0] } : { backgroundColor: data.color }} className="product-color product-color2" onClick={() => setSecondColor(false)}></div>

                                {data.img2 && <div style={{ backgroundColor: data.color[1] }} className="product-color product-color2" onClick={() => setSecondColor(true)}></div>}
                            </div>
                        </div>
                        <div className="product-size-container">
                            <p className='product-bold-text'>Size*</p>
                            <div className="product-sizes">
                                {data.categories.includes("shoes") ?
                                    // for shoes display shoe sizes, and for clothes clothe sizes
                                    shoeSizes.map((size, i) => {
                                        return (
                                            <div onClick={() => setPickedSize(i)}
                                                style={pickedSize === i ? { color: 'black', border: '2px solid black' } : {
                                                    color: '#767676', border: '1px solid #767676'
                                                }}
                                            >{size}</div>
                                        )
                                    })
                                    :
                                    clothesSizes.map((size, i) => {
                                        return (
                                            <div onClick={() => setPickedSize(i)}
                                                style={pickedSize === i ? { color: 'black', border: '2px solid black' } : {
                                                    color: '#767676', border: '1px solid #767676'
                                                }}
                                            >{size}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="product-quantity-container">
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
                        <br />
                        <b>Material + Care</b>
                        <p>-{data.material}</p>
                        <p>-Machine wash</p>
                        <p>-Imported</p>
                    </section>
                    <section className="product-info-returns">
                        <h4>Shipping + Returns</h4>
                        <b>Shipping</b>
                        <table>
                            <tr>
                                <th>Method</th>
                                <th>Shipping Time</th>
                                <th>Cost</th>
                            </tr>
                            <tr>
                                <td>Standard</td>
                                <td>Arrives in 5-8 business days</td>
                                <td>Orders up to $49.99: $4.95
                                    Orders $50 and over: FREE</td>
                            </tr>
                            <tr>
                                <td>Express</td>
                                <td>Arrives in 2-3 business days</td>
                                <td>$14.95</td>
                            </tr>
                            <tr>
                                <td>Rush</td>
                                <td>Arrives in 1-2 business days</td>
                                <td>$21.95</td>
                            </tr>
                            <tr>
                                <td>Truck</td>
                                <td>Arrives in 2-4 weeks once shipped</td>
                                <td>Cost may vary</td>
                            </tr>
                        </table>
                        <div className="product-info-returns-footer">
                            <p>Rush Shipping may not be available for all orders depending on fulfillment location.</p>
                            <p>Shipping outside of the US? See our <span>international shipping</span> rates.</p>
                            <p>This item is available for delivery to one of our convenient Collection Points.</p>
                            <p className='bold-text'>Returns</p>
                            <p>Free pre-paid returns and exchanges for orders shipped to the US. Get refunded faster with easy online returns and print a FREE pre-paid return SmartLabel® online! Return or exchange any unused or defective merchandise by mail or at one of our US or Canada store locations. Made to order items cannot be canceled, exchanged or returned.</p>
                            <p>Visit <span>Returns + Exchanges</span> for more information on completing a return.</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Product


// TODO add repsonsive to products, create a modal