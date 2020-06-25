import React from "react";
import { useState } from "react";
const RangeSlider = (min, max, defaultState, label, id) => {
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
    step: 0.5,
    value: state,
    onChange: handleChange,
  };
  return props;
};

export default RangeSlider;
