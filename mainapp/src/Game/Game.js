import React, { Component } from "react";
import Square from "../Square/Square";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-7 offset-md-1">
            <div className="css-grid-container1">
              {this.props.gameMap.map((element, i) => {
                return <Square key={i} number={element} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
