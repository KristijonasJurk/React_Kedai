import React from 'react';
import { womensBrowse } from '../../components/data';
import { useGlobalContext } from '../../context'

function Womens() {
    const { closeSubmenu } = useGlobalContext();
    return (
        <div className='womens-container' onMouseOver={closeSubmenu}>
            <section className="womens-filter-container">
                <p>Browse by:</p>
                <div className="womens-filters">
                    <ul>
                        {womensBrowse.map((category, index) => {
                            return (
                                <li><a href="#">{category}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <section className="womens-products-container">
                <header className='womens-products-header'>
                    <h3>Women's Clothing <span>4864 results</span></h3>
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
                        <li>
                            <img src={`https://s7d5.scene7.com/is/image/UrbanOutfitters/59155721_010_d?$medium$&qlt=80&fit=constrain`} alt="shirt" />
                            <div className="womens-product-footer">
                                <p className='womens-product-title'>Project Social T Rose Infused Oversized Tee</p>
                                <p>$39.00</p>
                                <div className="product-colors">
                                    <div className="product-color"></div>
                                    <div className="product-color"></div>
                                </div>
                                <span>Back in Stock</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Womens
