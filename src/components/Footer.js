import React, { useState, useLayoutEffect } from 'react'
import { AiOutlineMail, AiOutlinePlus } from 'react-icons/ai';
import { FaStoreAlt } from 'react-icons/fa';

const data = [
    { title: 'Help', links: ['Order status', 'Start A Return Or Exchange', 'Returns & Exchanges', 'Shipping', 'Order & Payments', 'FAQ', 'Product Recalls', 'Contact Us', 'See All Help Topics'] },
    { title: 'Quick Links', links: ['Brands', 'Gift Cards', 'Careers', 'Shop Europe', 'Shop N.America'] },
    { title: 'Extras', links: ['Afterpay', 'Kedai Community', 'Creative Services', 'Diversity & Inclusion', 'Kedai Spaces'] },
    { title: ['Find Store', 'Get Email'] }
]

function Footer() {
    const [screenWidth, setScreenWidth] = useState(0)
    const [showLinks, setShowLinks] = useState(-1);

    useLayoutEffect(() => {
        function updateSize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

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
                {/* footer links are dropdown tabs when screen width is < 800 */}
                <div className={`${screenWidth < 800 ? 'footer-links-tabs' : 'footer-links'}`}>
                    {data.map((row, index) => {
                        const { title, links } = row;
                        return (
                            links ? <div key={index} className={`footer-link footer-link${index}`}>
                                <div className='footer-link-title-container'>
                                    <h5>{title}</h5>
                                    {screenWidth < 800 && <AiOutlinePlus className='footer-link-expand' onClick={() => setShowLinks(index)} />}
                                </div>
                                {showLinks === index && screenWidth < 800 ?
                                    <ul>
                                        {links.map((link) => {
                                            return (
                                                <li>
                                                    <a href="#">{link}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    : ''
                                }
                                {screenWidth > 800 ?
                                    <ul>
                                        {links.map((link) => {
                                            return (
                                                <li>
                                                    <a href="#">{link}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    : ''
                                }
                            </div>
                                : <div>
                                    <ul>
                                        {title.map((single, index2) => {
                                            return (
                                                <div key={index} className={`footer-link footer-link${index2 + 3}`}>
                                                    {index2 === 1 ? <AiOutlineMail /> : <FaStoreAlt />}
                                                    <h5>{single}</h5>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                        )
                    })}
                </div>
                <div className="footer-socials">
                    footer socials template-rows 2/3
                </div>
            </section>
        </footer>
    )
}

export default Footer
