import React from "react";

const Banner = ({ img }) => {
  return (
    <figure className="shop-banner">
      <img src={img} alt="" />
    </figure>
  );
};

export default Banner;
