import React from "react";

const Product = ({
  product: { img, price, maxprice, name, star, quantity, inCart },
}) => {
  return (
    <figure className="shop-right-grid-block">
      <img src={img} alt="" />
      <figcaption className="product">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
        <div className="product-rating">
          <div className="procudt-rating-icon">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <span className="product-rating-quantity">({quantity})</span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Product;
