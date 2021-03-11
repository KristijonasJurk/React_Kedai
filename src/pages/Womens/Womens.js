import React from 'react'

function Womens() {
    return (
        <div className='womens-container'>
            <section className="womens-filter-container">
                <b>Brwose by:</b>
                <div className="womens-filters">
                    <ul>
                        {/* DATAAAAA */}
                    </ul>
                </div>
            </section>
            <section className="womens-products-container">
                <header>
                    <h3>Women's clothing <span>4864 results</span></h3>
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
                    <div className="womens-products-container">
                        <ul>
                            <li>
                                <img src={`https://s7d5.scene7.com/is/image/UrbanOutfitters/59155721_010_d?$medium$&qlt=80&fit=constrain`} alt="shirt" />
                                <div className="womens-product-footer">

                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
            </section>
        </div>
    )
}

export default Womens
