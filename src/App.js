import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ProductList from "./components/product/ProductList";

import ProductDetail from "./components/product/ProductDetail";
import "./assets/scss/main.css";
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={ProductList} />
          <Route path="/shop/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
