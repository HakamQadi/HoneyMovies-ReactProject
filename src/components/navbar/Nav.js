// import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/js/bootstrap'
import logo from '../../assets/icns/logo2.png';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <img className="navbar-brand" alt='logo' src={logo} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/series">Series</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
