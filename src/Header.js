import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Header() {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header_logo" />
            <span className="header_logo2">.in</span>
            {/* <a href="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo">

                <span className="header_logo2">.in</span>
            </a> */}
            {/* <div className="map_logo"></div> */}
            <LocationOnOutlinedIcon className="map_icon"/>
            <div id="header_option_address" className="header_option">
                <span className="option_firstLine" style={{color:'#ccc'}}>
                    Hello
                </span>
                <span className="option_secondLine">
                    Select your address
                </span>
            </div>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="option_firstLine">
                        Hello Guest
                    </span>
                    <span className="option_secondLine">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="option_firstLine">
                        Returns
                    </span>
                    <span className="option_secondLine">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="option_firstLine">
                        Your
                    </span>
                    <span className="option_secondLine">
                        Prime
                    </span>
                </div>
                <div className="header_basket">
                    <ShoppingBasketIcon />
                    <span className="option_secondLine header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
