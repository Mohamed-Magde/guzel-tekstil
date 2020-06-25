import React, { Fragment } from "react";
import SecondaryBanner from "../layout/SecondaryBanner";
import ConactUs from "../layout/contact/ConactUs";

const Contact = () => {
  return (
    <Fragment>
      <SecondaryBanner title="Contact Us" />
      <ConactUs />
    </Fragment>
  );
};

export default Contact;
