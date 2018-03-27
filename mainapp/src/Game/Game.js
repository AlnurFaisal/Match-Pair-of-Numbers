import React, { Component } from "react";
import Square from "../Square/Square";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="css-grid-container">
        {this.props.gameMap.map((element, i) => {
          return <Square key={i} number={element} />;
        })}
      </div>
    );
  }
}

export default Game;
