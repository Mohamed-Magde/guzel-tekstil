import React from "react";

const SecondaryBanner = ({ title }) => {
  return (
    <section className="secondarybanner">
      <div className="container">
        <h2 className="heading-2"> {title}</h2>
      </div>
    </section>
  );
};

export default SecondaryBanner;
