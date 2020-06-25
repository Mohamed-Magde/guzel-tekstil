import React, { Fragment } from "react";
import Banner from "../layout/Home/Banner";
import SingleList from "../layout/Home/SingleList";
import Trending from "../layout/Home/Trending";
import ClientReview from "../layout/Home/ClientReview";
import Subscribe from "../layout/Home/Subscribe";
import Features from "../layout/Home/Features";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <SingleList />
      <Trending />
      <ClientReview />
      <Features />
      <Subscribe />
    </Fragment>
  );
};

export default Home;
