import React from "react";
import SidebarTitle from "./SidebarTitle";

const Color = () => {
  return (
    <div className="shop-left-color">
      <SidebarTitle titleSide="Color" />
      <div className="colors">
        <span style={{ backgroundColor: "rgb(135, 85, 75)" }} class=""></span>
        <span style={{ backgroundColor: "rgb(135, 85, 75)" }} class=""></span>
        <span style={{ backgroundColor: "rgb(51, 51, 51)" }} class=""></span>
        <span
          style={{ backgroundColor: "rgb(218, 50, 63)" }}
          class="active"
        ></span>
        <span style={{ backgroundColor: "rgb(47, 54, 108)" }}></span>
        <span style={{ backgroundColor: "rgb(185, 194, 223)" }}></span>
        <span style={{ backgroundColor: "rgb(95, 183, 212)" }}></span>
        <span style={{ backgroundColor: "rgb(47, 54, 108)" }}></span>
      </div>
    </div>
  );
};

export default Color;
