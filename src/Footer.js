import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'

function Footer() {

    function scrollToTop() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <div className="Footer">
                <button className="Footer__backToTop" onClick={scrollToTop}>Back to top</button>
                <div className="Footer__info">
                    <ul>
                        <li>Get to Know Us</li>
                        <li>About</li>
                        <li>Career</li>
                        <li>Press</li>
                        <li>Amazon Cares</li>
                        <li>Gift a smile</li>
                    </ul>
                    <ul>
                        <li>Connect with us</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                    <ul>
                        <li>Make Money with Us</li>
                        <li>Sell on Amazon fake</li>
                        <li>Sell under Amazon fake</li>
                        <li>Amazon fake Global Selling</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay</li>
                    </ul>
                    <ul>
                        <li>Connect with us</li>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="Footer__copyright">
                    {/* <Link to="/" className="Footer_Link"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="Footer__copyright_img" /></Link> */}
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="Footer__copyright_img" />
                    <h4>Amazon Clone created by &copy; Yadhu</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
