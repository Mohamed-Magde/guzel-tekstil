import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const SingleList = () => {
  const data = [
    {
      id: 0,
      img: "img/single_product_1.png",
      bold: "Started from $10",
      title: "Printed memory foam brief modern throw pillow case",
      btn: "EXPLORE NOW",
      name: "first",
    },
    {
      id: 1,
      img: "img/single_product_2.png",
      bold: "Started from $10",
      title: "Printed memory foam brief modern throw pillow case",
      btn: "EXPLORE NOW",
      name: "second",
    },
  ];
  return (
    <section className="single-list">
      {data.map((item) => {
        const { id, img, bold, title, btn, name } = item;
        return (
          <div className="container">
            <div className="single-list-block" key={id}>
              <p className="bold"> {bold} </p>
              <h2 className="heading-2">{title}</h2>
              <Link className="btn-secondary">{btn}</Link>
            </div>
            <figure className={name}>
              <img src={img} alt="" />
            </figure>
          </div>
        );
      })}
    </section>
  );
};

export default SingleList;
