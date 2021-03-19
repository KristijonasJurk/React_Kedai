import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import { useGlobalContext } from '../../context'

const Home = () => {
    const { closeSubmenu } = useGlobalContext();

    const [cartIsEmpty, setCartIsEmpty] = useState(false)

    return (
        <div className="cart-container" onMouseOver={closeSubmenu}>
            <section className="cart-item-container">
                <div className="cart-header">
                    <h4>Shopping Bag</h4>
                    <a href="/">Delivery Options</a>
                </div>
                {cartIsEmpty ?
                    <div className="cart-items-empty">
                        Your bag is currently empty. <span>Continue Shopping.</span>
                    </div>
                    :
                    <div className="cart-items">
                        <div className="cart-items-header">
                            <p>Item</p>
                            <p>Item Price</p>
                            <p>Quantity</p>
                            <p>Total Price</p>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-item">
                                <img src={`https://s7d5.scene7.com/is/image/UrbanOutfitters/43319946_001_b?fit=constrain&fmt=webp&hei=444&qlt=80&wid=296`} alt="product" />
                                <div className="cart-item-details">
                                    <p>Birkenstock Arizona Leather Sandal</p>
                                    <p><span>Color</span> Black</p>
                                    <p><span>Size</span> M8</p>
                                    <u>Edit</u>
                                </div>
                            </div>
                            <div className="cart-item-price">
                                $125.00
                            </div>
                            <div className="cart-item-quantity">
                                <button className='item-amount-btn'>
                                    <BsChevronCompactUp />
                                </button>
                                {/* amount */}
                                <p className='item-amount'>2</p>
                                {/* decrease amount */}
                                <button className='-item-amount-btn'>
                                    <BsChevronCompactDown />
                                </button>
                                <div className="cart-item-remove">
                                    <button className="remove-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="cart-item-total-price">
                                $250.00
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-item">
                                <img src={`https://s7d5.scene7.com/is/image/UrbanOutfitters/43319946_001_b?fit=constrain&fmt=webp&hei=444&qlt=80&wid=296`} alt="product" />
                                <div className="cart-item-details">
                                    <p>Birkenstock Arizona Leather Sandal</p>
                                    <p><span>Color</span> Black</p>
                                    <p><span>Size</span> M8</p>
                                    <u>Edit</u>
                                </div>
                            </div>
                            <div className="cart-item-price">
                                $125.00
                            </div>
                            <div className="cart-item-quantity">
                                <button className='item-amount-btn'>
                                    <BsChevronCompactUp />
                                </button>
                                {/* amount */}
                                <p className='item-amount'>2</p>
                                {/* decrease amount */}
                                <button className='-item-amount-btn'>
                                    <BsChevronCompactDown />
                                </button>
                                <div className="cart-item-remove">
                                    <button className="remove-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="cart-item-total-price">
                                $250.00
                            </div>
                        </div>
                    </div>
                }
            </section>
            <section className="cart-order-container">
                <div className="cart-order-header">
                    <h5>Order Summary</h5>
                    <a href="/">
                        800.282.2200
                </a>
                </div>
                <div className="cart-order">
                    <div className="cart-order-content">
                        <div className="cart-shipping">
                            <p>Shipping</p>
                            <p>TBD</p>
                        </div>
                        <div className="cart-tax">
                            <p>Estimated Tax</p>
                            <p>$0.00</p>
                        </div>
                        <div className="cart-total">
                            <b>Total</b>
                            <b>$0.00</b>
                        </div>
                        <div className="cart-order-footer-container">
                            <p className='cart-order-footer'>Available orders up to $3,500.00. No debit.</p>
                            <IoMdInformationCircleOutline />
                        </div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
