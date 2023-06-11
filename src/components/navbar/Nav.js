import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import logo from '../../assets/icns/logo2.png';
import './Nav.css'
import { Link } from 'react-router-dom';
// import logo


const Nav = () => {
    return (
        // <div className="container2">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container" >
                <img className="navbar-brand" alt='logo' src={logo} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/series">Series</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        // </div>
    )
}

export default Nav
