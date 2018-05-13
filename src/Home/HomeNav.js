import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Home2 from "./Home2";

const HomeNav = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Home2} />
  </div>
);

export default HomeNav;
