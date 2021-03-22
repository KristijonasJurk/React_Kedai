import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { mensProducts, mensBrowse } from '../../components/data';
import { useGlobalContext } from '../../context'

function Womens() {
    const { closeSubmenu } = useGlobalContext();

    const [products, setProducts] = useState(mensProducts)

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
    const filterItems = (category) => {
        if (category === 'All') {
            setProducts(mensProducts);
            return;
        }
        const newItems = mensProducts.filter((item) => item.categories.includes(category));
        setProducts(newItems);
    };
    const sortData = type => {
        const types = {
            fromHigh: 'price',
            AZ: 'title',
            fromLow: 'price',
            ZA: 'title',
        };
        const sortProperty = types[type];
        if (type === 'fromHigh') {
            const sortedData = [...mensProducts].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setProducts(sortedData)
        } if (type === 'fromLow') {
            const sortedData = [...mensProducts].sort((a, b) => a[sortProperty] - b[sortProperty]);
            setProducts(sortedData)
        } else {
            const sortedData = [...mensProducts].sort(function (a, b) {
                if (a[sortProperty] < b[sortProperty]) { return -1; }
                if (a[sortProperty] > b[sortProperty]) { return 1; }
                return 0;
            })
            if (type === 'AZ') {
                setProducts(sortedData)
            } else {
                setProducts(sortedData.reverse())
            }
        }
    }

    return (
        <div className='womens-container' onMouseOver={closeSubmenu}>
            <section className="womens-filter-container">
                <p>Browse by:</p>
                <div className="womens-filters">
                    {screenWidth < 660 ?
                        <select>
                            {mensBrowse.map((category, index) => {
                                return (
                                    <option key={index} onClick={() => filterItems(category)}>{category}</option>
                                )
                            })}
                        </select>
                        :
                        <ul>
                            {mensBrowse.map((category, index) => {
                                return (
                                    <li key={index} onClick={() => filterItems(category)}>{category}</li>
                                )
                            })}
                        </ul>
                    }
                </div>
            </section>
            <section className="womens-products-container">
                <header className='womens-products-header'>
                    <h3>Women's Clothing <span>{mensProducts.length} results</span></h3>
                    <div className="womens-sort-container">
                        <label htmlFor="womens-sort">Sort:</label>
                        <select name="womens sort" id="womens-sort" onChange={(e) => sortData(e.target.value)}>
                            <option hidden value="Featured">Featured</option>
                            <option value="fromLow">Low to High</option>
                            <option value="fromHigh">High to Low</option>
                            <option value="AZ">A-Z</option>
                            <option value="ZA">Z-A</option>
                        </select>
                    </div>
                </header>
                <div className="womens-products-container">
                    <ul>
                        {products.map((product, index) => {
                            const { id, title, price, color, img, img2, tags } = product;
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
