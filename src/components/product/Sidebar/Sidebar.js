import React from "react";
import Filter from "./Filter";
import Size from "./Size";
import Color from "./Color";
import Brand from "./Brand";

const Sidebar = () => {
  return (
    <div className="shop-left">
      <Filter />
      <Size />
      <Color />
      <Brand />
    </div>
  );
};

export default Sidebar;
