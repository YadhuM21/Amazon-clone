import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleUser = () => {
        if(user) {
            auth.signOut();
        }
    }


    return (
        <div className="header">
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header_logo" />
            </Link>
            <span className="header_logo2">.in</span>

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
                <Link className="header_link" to={!user && "/login"}>
                    <div onClick={handleUser} className="header_option">
                        <span className="option_firstLine">
                            Hello {user ? user.email.split("@")[0].toUpperCase() : 'Guest'}
                        </span>
                        <span className="option_secondLine">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
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
                <Link className="header_link" to="/checkout">
                    <div className="header_basket">
                        <ShoppingCartOutlinedIcon style={{marginRight: "3px"}}/>
                        <div className="header_option" style={{marginLeft: "0px"}} >
                            <span className="cart_count option_firstLine" style={{color : "#FEBD69", fontWeight : "700"}}>
                                {basket?.length}
                            </span>
                            <span className="option_secondLine" style={{color : "FEBD69"}} >
                                Cart
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
