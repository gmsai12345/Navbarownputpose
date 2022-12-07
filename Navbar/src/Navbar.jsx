import React from "react";
import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;
