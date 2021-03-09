import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const Home = () => {
    return (
        <div className="cart-container">
            <section className="cart-item-container">
                <div className="cart-header">
                    <h4>Shopping Bag</h4>
                    <a href="#">Delivery Options</a>
                </div>
                <div className="cart-items">
                    Your bag is currently empty. <span>Continue Shopping.</span>
                </div>
            </section>
            <section className="cart-order-container">
                <div className="cart-order-header">
                    <h5>Order Summary</h5>
                    <a href="#">
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
