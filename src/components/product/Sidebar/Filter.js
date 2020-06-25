import React from "react";
import SidebarTitle from "./SidebarTitle";
import { useState } from "react";

const useSlider = (min, max, defaultState, label, id) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = (e) => {
    console.log("setting level", e.target.value);
    setSlide(e.target.value);
  };

  const props = {
    type: "range",
    id,
    min,
    max,
    step: 0,
    value: state,
    onChange: handleChange,
  };
  return props;
};

const Filter = () => {
  const sliderProps = useSlider(1, 1000, 0, "Threshold", "threshold");
  return (
    <div className="shop-left-filter">
      <SidebarTitle titleSide="Filter" />
      <input {...sliderProps} />
      <span>Low Price : {sliderProps.value}</span>
    </div>
  );
};

export default Filter;
