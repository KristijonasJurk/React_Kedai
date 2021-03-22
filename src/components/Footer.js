import React, { useState, useLayoutEffect } from 'react'
import { AiOutlineMail, AiOutlinePlus, AiFillTwitterCircle, AiFillGithub, AiFillAmazonCircle } from 'react-icons/ai';
import { FaStoreAlt, FaFacebook, FaPinterest, FaSpotify } from 'react-icons/fa';

const data = [
    { title: 'Help', links: ['Order status', 'Start A Return Or Exchange', 'Returns & Exchanges', 'Shipping', 'Order & Payments', 'FAQ', 'Product Recalls', 'Contact Us', 'See All Help Topics'] },
    { title: 'Quick Links', links: ['Brands', 'Gift Cards', 'Careers', 'Shop Europe', 'Shop N.America'] },
    { title: 'Extras', links: ['Afterpay', 'Kedai Community', 'Creative Services', 'Kedai MRKT', 'Charity', 'Diversity & Inclusion', 'Kedai Spaces'] },
    { title: ['Find Store', 'Get Email'] }
]

function Footer() {
    const [showLinks, setShowLinks] = useState(-1);
    const [screenWidth, setScreenWidth] = useState(0)

    useLayoutEffect(() => {
        function updateSize() {
            setScreenWidth(window.innerWidth);
            // when the screen is more than 800 width, the tabs are reset
            if (window.innerWidth > 800) {
                setShowLinks(-1)
            }
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
                                {/* screen size under 800 */}
                                {showLinks === index && screenWidth < 800 ?
                                    <ul>
                                        {links.map((link, i) => {
                                            return (
                                                <li key={i}>
                                                    <a href="/">{link}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    : ''
                                }
                                {/* screen size over 800 */}
                                {screenWidth > 800 ?
                                    <ul>
                                        {links.map((link, i) => {
                                            return (
                                                <li key={i}>
                                                    <a href="/">{link}</a>
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
                    <section className="footer-socials-download">
                        <img src="https://images.ctfassets.net/q602vtcuu3w3/6dBQRtUvXacKeuqywuQgCs/9602843507b7084aff9e9bb9c4652459/Download_on_the_App_Store_Badge_EN_blk_092917-01.jpeg" alt="download on appstore" />
                        <img src="https://images.ctfassets.net/q602vtcuu3w3/2mEsc8ts7uIasMuKaeEGoW/f0d28c0b2f7d54433597282a9c1b38b9/google-play-badge_EN-01.jpeg" alt="download on google" />
                    </section>
                    <section className="footer-socials-links">
                        <FaFacebook color='rgb(58, 90, 152)' />
                        <FaPinterest color='rgb(189, 9, 28)' />
                        <FaSpotify color='rgb(35, 207, 95)' />
                        <AiFillAmazonCircle />
                        <AiFillTwitterCircle color='rgb(0, 172, 237)' />
                        <AiFillGithub />
                    </section>
                    <section className="footer-socials-docs">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Use </li>
                            <li>CA Transparency</li>
                            <li>Accessibility</li>
                            <li>Membership</li>
                        </ul>
                    </section>
                    <section className="footer-socials-rights">
                        <p>© 2021 Kristijonas Jurkšas All Rights Reserved</p>
                    </section>
                </div>
            </section>
        </footer>
    )
}

export default Footer
