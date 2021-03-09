import React from 'react'

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
                        <p>$0.00</p>
                    </div>
                    <p>Available orders up to $3,500.00</p>
                </div>
            </section>
        </div>
    )
}

export default Home
