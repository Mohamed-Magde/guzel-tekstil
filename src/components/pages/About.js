import React, { Fragment } from "react";
import SecondaryBanner from "../layout/SecondaryBanner";
import AboutUs from "../layout/about/AboutUs";
import Features from "../layout/Home/Features";

const About = () => {
  return (
    <Fragment>
      <SecondaryBanner title="About Us" />
      <AboutUs />
      <Features />
    </Fragment>
  );
};

export default About;
