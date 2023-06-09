import React from 'react';
import logo from '../../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="orders">Order</Link>
                
                <Link to="review">Order Review</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;