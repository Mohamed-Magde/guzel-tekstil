import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [menu, setMenu] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
    console.log("it is working");
  };
  return (
    <nav className={navBackground ? "toggled" : "nav"}>
      <div className="container">
        <div
          className="menu-btn"
          onClick={() => {
            handleMenu();
          }}
        >
          <i className="fas fa-bars"></i>
        </div>
        <figure className="logo">
          <img src="./img/logo/logo-img.png" alt="" />
        </figure>
        <ul className={menu ? "hide" : "nav-list"}>
          <li
            onClick={() => {
              handleMenu();
            }}
          >
            <Link to="/" className="nav-list-item">
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              handleMenu();
            }}
          >
            <Link to="/about" className="nav-list-item">
              About
            </Link>
          </li>
          <li
            onClick={() => {
              handleMenu();
            }}
          >
            <Link to="/shop" className="nav-list-item">
              Products
            </Link>
          </li>
          <li
            onClick={() => {
              handleMenu();
            }}
          >
            <Link to="/contact" className="nav-list-item">
              Contact
            </Link>
          </li>
        </ul>

        <div className="cart">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
