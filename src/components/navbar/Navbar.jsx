import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/images/logoyo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavActive, setNavActive] = useState(false);

  const closeNav = () => {
    setNavActive(false);
  };

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <div className="nav__container">
      <div className="filter"></div>
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="Mi logo" style={{ width: "4rem" }} />
        </Link>
        <div className={`${isNavActive ? "toggle" : "hamburger"}`} onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className={`nav-bar ${isNavActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/home" className="active" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="active" onClick={closeNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="/works" className="active" onClick={closeNav}>
                Works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="active" onClick={closeNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
