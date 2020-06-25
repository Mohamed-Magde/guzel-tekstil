import React from "react";

const Trending = () => {
  const data = [
    {
      id: 0,
      img: "img/tranding_item_1.png",

      title: "Cervical pillow for airplane car office nap pillow",
      price: "From $5",
    },
    {
      id: 1,
      img: "img/tranding_item_2.webp",

      title: "Foam filling cotton slow rebound pillows",
      price: "From $5",
    },
    {
      id: 3,
      img: "img/tranding_item_3.png",

      title: "Memory foam filling cotton Slow rebound pillows",
      price: "From $5",
    },
    {
      id: 3,
      img: "img/tranding_item_4.png",

      title: "Cervical pillow for airplane car office nap pillow",
      price: "From $5",
    },
    {
      id: 4,
      img: "img/tranding_item_5.png",

      title: "Foam filling cotton slow rebound pillows",
      price: "From $5",
    },
    {
      id: 5,
      img: "img/tranding_item_6.webp",

      title: "Memory foam filling cotton Slow rebound pillows",
      price: "From $5",
    },
  ];
  return (
    <section className="trending">
      <div className="container">
        <h3 className="heading-3">Trending Items</h3>
        <div className="trending-grid">
          {data.map((item) => {
            const { id, img, price, title } = item;
            return (
              <figure key={id} className="trending-grid-block">
                <img src={img} alt="" />
                <figcaption>
                  <span className="title">{title}</span>
                  <span className="price">{price}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
