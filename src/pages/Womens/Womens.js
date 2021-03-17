import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { womensBrowse, womensProducts } from '../../components/data';
import { useGlobalContext } from '../../context'

function Womens() {
    const { closeSubmenu } = useGlobalContext();

    const [products,] = useState(womensProducts)

    const [mouseOver, setMouseOver] = useState(-1);
    const [secondColor, setSecondColor] = useState({ isActive: false, id: null })

    const [screenWidth, setScreenWidth] = useState(0)

    useLayoutEffect(() => {
        function updateSize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])


    return (
        <div className='womens-container' onMouseOver={closeSubmenu}>
            <section className="womens-filter-container">
                <p>Browse by:</p>
                <div className="womens-filters">
                    {screenWidth < 660 ?
                        <select>
                            {womensBrowse.map((category, index) => {
                                return (
                                    <option>{category}</option>
                                )
                            })}
                        </select>
                        :
                        <ul>
                            {womensBrowse.map((category, index) => {
                                return (
                                    <li><a href="/">{category}</a></li>
                                )
                            })}
                        </ul>
                    }
                </div>
            </section>
            <section className="womens-products-container">
                <header className='womens-products-header'>
                    <h3>Women's Clothing <span>{womensProducts.length} results</span></h3>
                    <div className="womens-sort-container">
                        <label htmlFor="womens-sort">Sort:</label>
                        <select name="womens sort" id="womens-sort">
                            <option hidden value="Featured">Featured</option>
                            <option value="Low-to-High">Low to High</option>
                            <option value="High-to-Low">High to Low</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </div>
                </header>
                <div className="womens-products-container">
                    <ul>
                        {products.map((product, index) => {
                            const { id, title, price, color, text, material, img, img2, categories, tags } = product;
                            return (
                                // <Link to={`product/${id}`}>
                                <li key={id} onMouseEnter={() => setMouseOver(id)}
                                    onMouseLeave={() => setMouseOver(-1)}>
                                    <Link to={`product/${id}`}>
                                        {
                                            secondColor.id === id && secondColor.isActive ?
                                                <img src={`${mouseOver === id ? img2[1] : img2[0]}`} alt="product" /> :
                                                <img src={`${mouseOver === id ? img[1] : img[0]}`} alt="product" />
                                        }
                                    </Link>
                                    <div className="womens-product-footer">
                                        <p className='womens-product-title'>{title}</p>
                                        <p>€{price}</p>
                                        <div className="product-colors">

                                            <div style={img2 ? { backgroundColor: color[0] } : { backgroundColor: color }} className="product-color product-color2" onClick={() => setSecondColor({ isActive: false, id: id })}></div>
                                            {img2 && <div style={{ backgroundColor: color[1] }} className="product-color product-color2" onClick={() => setSecondColor({ isActive: true, id: id })}></div>}

                                        </div>
                                        <span>{tags}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Womens
