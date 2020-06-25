import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="heading-1">Best quality pillow</h1>
        <p>
          Seamlessly empower fully researched growth strategies and
          interoperable internal
        </p>
        <Link className="btn-primary">Shop Now</Link>
      </div>
      <figure>
        <img src="./img/banner.png" alt="" />
        <img className="img-dots" src="./img/banner_pattern.webp" alt="" />
      </figure>
    </header>
  );
};

export default Banner;
