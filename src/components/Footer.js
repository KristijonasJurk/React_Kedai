import React from 'react'

function Footer() {
    return (
        <footer>
            <section className="newsletter">
                <h4>Get Our Emails</h4>
                <p className='newsletter-text'>Sign up to receive Urban Outfitters emails and get first dibs on new arrivals, sales, exclusive content, events and more!</p>
                <b>Email Address*</b>
                <form action="submit">
                    <input type="text" />
                    <button>Submit</button>
                </form>
                <p className='newsletter-policy'>By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our Privacy Policy <span>here</span> and you may <span>unsubscribe</span> at any time.</p>
            </section>
            <section className="footer-container">
                <div className="footer-links">
                    footer links
                </div>
                <div className="footer-socials">
                    footer socials
                </div>
            </section>
        </footer>
    )
}

export default Footer
