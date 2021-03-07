import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaStoreAlt } from 'react-icons/fa';

const data = [
    { title: 'Help', links: ['Order status', 'Start A Return Or Exchange', 'Returns & Exchanges', 'Shipping', 'Order & Payments', 'FAQ', 'Product Recalls', 'Contact Us', 'See All Help Topics'] },
    { title: 'Quick Links', links: ['Brands', 'Gift Cards', 'Careers', 'Shop Europe', 'Shop N.America'] },
    { title: 'Extras', links: ['Afterpay', 'Kedai Community', 'Creative Services', 'Diversity & Inclusion', 'Kedai Spaces'] },
    { title: 'Help', links: ['Order status', 'Start A Return Or Exchange', 'Returns & Exchanges', 'Shipping', 'Order & Payments', 'FAQ', 'Product Recalls', 'Contact Us', 'See All Help Topics'] },
    { title: ['Find Store', 'Get Email'] }
]

function Footer() {
    return (
        <footer>
            <section className="newsletter">
                <div className="newsletter-text-container">
                    <h3>Get Our Emails</h3>
                    <p className='newsletter-text'>Sign up to receive Kedai emails and get first dibs on new arrivals, sales, exclusive content, events and more!</p>
                </div>
                <form action="submit">
                    <label htmlFor="">Email Address*</label>
                    <input type="text" />
                    <button>Submit</button>
                </form>
                <p className='newsletter-policy'>By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our Privacy Policy <span>here</span> and you may <span>unsubscribe</span> at any time.</p>
            </section>
            <section className="footer-container">
                <div className="footer-links">
                    {data.map((row, index) => {
                        const { title, links, icon } = row;
                        return (
                            links ? <div>
                                <h3>{title}</h3>
                                <ul>
                                    {links.map((link) => {
                                        return (
                                            <li>{link}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                                : <div>
                                    <ul>
                                        {title.map((single, index) => {
                                            return (
                                                <div>
                                                    {index === 1 ? <AiOutlineMail /> : <FaStoreAlt />}
                                                    <h4>{single}</h4>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                        )
                    })}
                </div>
                <div className="footer-socials">
                    footer socials
                </div>
            </section>
        </footer>
    )
}

export default Footer
