import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
const Header = () => {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link className='link' to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className='header__logo' alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link className='link' to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">

                        <span className="header__optionLineOne">
                            Hello {user ? user.email : 'Guest'}
                        </span>

                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link className='link' to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">&Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link className='link' to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className='header__optionLineTwo
                    header__baseketCount
                    '>{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header