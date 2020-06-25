import React from "react";

const Features = () => {
  const data = [
    {
      id: 0,
      title: "Credit Card Support",
      icon: "./img/icons/feature_icon_1.svg",
    },
    {
      id: 1,
      title: "Online Order",
      icon: "./img/icons/feature_icon_2.svg",
    },
    {
      id: 2,
      title: "Free Delivery",
      icon: "./img/icons/feature_icon_3.svg",
    },
    {
      id: 3,
      title: "Product with Gift",
      icon: "./img/icons/feature_icon_4.svg",
    },
  ];
  return (
    <section className="features">
      <div className="container">
        <div className="features-title">
          {" "}
          <h3 className="heading-3">
            Credibly innovate granular internal or organic sources whereas
            standards.
          </h3>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources. Credibly innovate
            granular internal or “organic” sources whereas high standards in
            web-readiness.
          </p>
        </div>

        <div className="features-grid">
          {data.map((item) => {
            const { id, title, icon } = item;
            return (
              <div className="features-grid-block" key={id}>
                <img src={icon} alt="" />
                <h4 className="heading-4">{title} </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
