import React from "react";
import Select from "react-select";

const options = [
  { value: "Order", label: "Default sorting" },
  { value: "popularity", label: "Sort by popularity" },
  { value: "date", label: "Sort by newness" },
  { value: "price", label: "Sort by price: low to high" },
  { value: "price-desc", label: "Sort by price: high to low" },
];
const LayoutChanger = () => {
  return (
    <div className="layout-changer">
      <div className="container">
        <Select className="select" options={options} />
        <div className="layout-changer-right">
          <i className="fas fa-grip-horizontal"></i>
          <i className="fas fa-list"></i>
        </div>
      </div>
    </div>
  );
};

export default LayoutChanger;
