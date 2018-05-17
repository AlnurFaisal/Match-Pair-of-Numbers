import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Home2 from "./Home2";

const HomeNav = props => (
  <div>
    <Route
      exact
      path="/"
      render={() => (
        <Home players={props.players} updatePlayers={props.updatePlayers} />
      )}
    />
    <Route
      exact
      path="/game"
      render={() => (
        <Home2 players={props.players} updatePlayers={props.updatePlayers} playerId={props.playerId} />
      )}
    />
  </div>
);

export default HomeNav;
