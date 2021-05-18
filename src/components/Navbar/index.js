import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLinkBlue,
    Logo
} from './Elements';

import logoimg from "../../images/hftp-logo.svg"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink className="logo" to="/">

                    <Logo src={logoimg} />
                    {/* <h1>Dava</h1> */}
                    {/* <img src={logoimg} alt='Logo' /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    {/* <NavLink to="/about" activeStyle>
                        About
                    </NavLink> */}
                    <NavLink to="/about" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Impact
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        2020 Hackathon
                    </NavLink>

                    <NavLinkBlue className="register" to="/download" activeStyle>
                         Register
                    </NavLinkBlue>
                </NavMenu>
            </Nav>
        </>
    )
};

export default Navbar;
