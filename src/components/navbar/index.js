import React, { useState, useEffect } from "react";
import logo from "../../assets/logoipsum-248.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <header className={navbar ? "header-section active" : "header-section"}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-icons">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </header>
    </>
  );
};

export default Navbar;
