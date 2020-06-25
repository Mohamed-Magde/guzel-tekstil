import React, { Fragment } from "react";
import LayoutChanger from "./LayoutChanger";
import Product from "./Product";
import Sidebar from "./Sidebar/Sidebar";
import Banner from "../layout/util/Banner";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_1.png",
    },
    {
      id: 2,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_2.png",
    },
    {
      id: 3,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_3.png",
    },
    {
      id: 4,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_4.png",
    },
    {
      id: 5,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_5.png",
    },
    {
      id: 6,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_6.png",
    },
    {
      id: 7,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_7.png",
    },
    {
      id: 8,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_8.png",
    },
    {
      id: 9,
      name: "lether rey pillow",
      price: "32 LE",
      maxPrice: "70 LE",
      inCart: false,
      star: 4,
      quantity: 20,
      img: "img/products/product_list_9.png",
    },
  ];
  return (
    <section className="shop">
      <Banner img="./img/designs/shop-bg.jpg" />
      <div className="container">
        <Sidebar />
        <div className="shop-right">
          <LayoutChanger />
          <div className="shop-right-grid">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
