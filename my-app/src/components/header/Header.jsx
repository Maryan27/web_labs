import React from "react";
import './header.css';
import logo from '../../img/logo_liverpoll.png'; 
import { NavLink } from "react-router-dom"; 

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="Liverpool Logo" className="logo-image" />
                    </div>
                    <div className="header__title">
                        <span>Liverpool</span>
                        <p>You will never walk alone!</p>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <NavLink 
                                    to="/HomePage" 
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/Catalog" 
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    Catalog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/Team" 
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    Team
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;


