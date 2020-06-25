import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <figure className="footer-logo">
          <img src="./img/logo/guzel.png" alt="" />
        </figure>
        <ul className="footer-list">
          <li>
            <Link className="footer-list-item">Home</Link>
          </li>
          <li>
            <Link className="footer-list-item">About</Link>
          </li>
          <li>
            <Link className="footer-list-item">Products</Link>
          </li>
          <li>
            <Link className="footer-list-item">Contact</Link>
          </li>
        </ul>

        <div className="footer-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
