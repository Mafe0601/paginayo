import React, { useState } from "react";
import "./navbar.css"
import logo from "../../assests/images/logoyo1.png" 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <div className="nav__container">
      <div className="filter">

      </div>
      <nav className="nav">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="Mi logo" style={{width:"4rem", paddingTop:".9rem"}}/>
        </Link>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/works" className="nav__link">
              Works
            </Link>
          </li>
          <li className="nav__item" style={{paddingRight:"2rem"}}>
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="linea1"></div>
          <div className="linea2"></div>
          <div className="linea3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
