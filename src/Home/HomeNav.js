import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Home2 from "./Home2";

const HomeNav = () => (
  <div>
    {/* I think Home could be better named to WelcomePage and Home2 could be better named as GameController */}
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Home2} />
  </div>
);

export default HomeNav;
