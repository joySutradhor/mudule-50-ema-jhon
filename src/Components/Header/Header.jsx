import "./Header.css"
import React from 'react';

const Header = () => {
    return (
        <nav className="header">
            <div className="headerContainer">
            <img src="../../../public/Logo.svg" alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
            </div>
        </nav >
    );
};

export { Header } ;