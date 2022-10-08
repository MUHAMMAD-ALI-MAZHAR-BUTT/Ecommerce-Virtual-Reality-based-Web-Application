import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Outlet } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './Nav.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';

const navStyle = {
    backgroundColor: 'rgba(255,255,255, 0.6)',
}

const navLinkStyle = {
    textDecoration: "none",
    textUnderline: "none",
    color: "rgb(255,106,0)",
    fontFamily: 'Playfair Display, serif',
    display: 'inline-block'
}




const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top shadow" style={navStyle}>
                <div className="container-fluid py-1">
                    <NavLink exact="true" className="h2 fw-bold ms-1 mb-0" to="/check" style={navLinkStyle}>MetaMart</NavLink>

                    <div className="input-group w-50 pe-5" style={{ display: 'inline-block' }}>
                        <div className="form-outline d-flex" >
                            <input type="search" placeholder="search" id="form1" className="form-control w-75 mx-auto me-0 shadow-sm" style={{ borderRadius: 'unset', border: '1px solid rgb(255,106,0)' }} />
                            <Button variant="contained" style={{backgroundColor: 'rgb(255,106,0)', borderRadius: 'unset'}} onClick><SearchIcon /></Button>

                        </div>

                    </div>

                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <div className="dropdown me-3">
                                <a href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="/">Glasses</a></li>
                                    <li><a className="dropdown-item" href="/">Jackets</a></li>
                                    <li><a className="dropdown-item" href="/">OutWears</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item me-2">
                            <a href="/">Requests</a>
                        </li>


                    </ul>

                    <AttachMoneyIcon className="me-2" style={{cursor: 'pointer'}} />
                    <ShoppingCartIcon className="me-2" style={{cursor: 'pointer'}} />
                    <LightModeIcon className="me-2" style={{cursor: 'pointer'}} />
                    <Person2Icon className="me-2" style={{cursor: 'pointer'}} />


                </div>
            </nav>


            <Outlet />
        </>
    );
}

export default Navbar;