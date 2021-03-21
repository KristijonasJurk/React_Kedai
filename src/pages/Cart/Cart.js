import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import { useGlobalContext } from '../../context'

const Home = () => {
    const { closeSubmenu, total, amount, cartId, clearCart, cart, removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
    return (
        <div className="cart-container" onMouseOver={closeSubmenu}>
            <section className="cart-item-container">
                <div className="cart-header">
                    <h4>Shopping Bag</h4>
                    <a href="/">Delivery Options</a>
                </div>
                {cart.length === 0 ?
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
                        {cart.map((cartItem, index) => {
                            cartItem = { ...cartItem }
                            const { id, title, price, color, text, material, img, categories, tags, size } = cartItem;
                            return (
                                <div className="cart-item">
                                    <div className="cart-item-item">
                                        <img src={img[0]} alt={title} />
                                        <div className="cart-item-details">
                                            <p>{title}</p>
                                            <p><span>Color</span> {color + ' '}</p>
                                            <p><span>Size</span> {size}</p>
                                            {/* <u>Edit</u> */}
                                        </div>
                                    </div>
                                    <div className="cart-item-price">
                                        ${price}
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button className='item-amount-btn' onClick={() => increaseAmount(id)}>
                                            <BsChevronCompactUp />
                                        </button>
                                        {/* amount */}
                                        <p className='item-amount'>{cartItem ? cartItem.amount : 1}</p>
                                        {/* decrease amount */}
                                        <button className='-item-amount-btn' onClick={() => decreaseAmount(id)}>
                                            <BsChevronCompactDown />
                                        </button>
                                        <div className="cart-item-remove">
                                            <button className="remove-btn" onClick={() => removeItem(id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-item-total-price">
                                        ${price}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </section>
            <section className="cart-order-container">
                <div className="cart-order-header">
                    <h5>Order Summary</h5>
                    <a href="/">
                        {/* renders a random cart ID */}
                        {cartId.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '.')}
                    </a>
                </div>
                <div className="cart-order">
                    <div className="cart-order-content">
                        <div className="cart-shipping">
                            <p>Shipping</p>
                            <p>${(total * 0.05).toFixed(2)}</p>
                        </div>
                        <div className="cart-tax">
                            <p>Estimated Tax</p>
                            <p>${(total * 0.002).toFixed(2)}</p>
                        </div>
                        <div className="cart-total">
                            <b>Total</b>
                            <b>${(total).toFixed(2)}</b>
                        </div>
                        <div className="cart-order-footer-container">
                            <p className='cart-order-footer'>Available orders up to $3,500.00. No debit.</p>
                            <IoMdInformationCircleOutline />
                        </div>
                        <div className="clear-cart-container" onClick={clearCart}>
                            <p>Clear Cart</p>
                        </div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
