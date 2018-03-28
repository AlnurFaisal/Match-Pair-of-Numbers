import React, { Component } from "react";
import Square from "../Square/Square";
import { doubleArray, shuffle, generatePositiveNumber } from "../utils/utils";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameMap: this.genRandomNumbers(),
      currentValue: null
    };
  }

  render() {
    console.log(this.state.currentValue);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-1">
            <div className="css-grid-container1">
              {this.state.gameMap.map((element, i) => {
                return (
                  <Square
                    key={i}
                    number={element}
                    setCurrentValue={this.setCurrentValue.bind(this)}
                    checkIfMatch={this.checkIfMatch.bind(this)}
                    getCurrentValue={this.getCurrentValue.bind(this)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  setCurrentValue(element) {
    this.setState({
      currentValue: element
    });
  }

  getCurrentValue(){
    return this.state.currentValue;
  }

  checkIfMatch(value) {
    if (value === this.state.currentValue) {
      console.log("its a match");
      return true;
    } else {
      console.log("not a match");
      return false;
    }
  }

  genRandomNumbers() {
    let arr = [];
    const ITERATIONS = 2;
    for (let i = 0; i < ITERATIONS; i++) {
      arr.push(generatePositiveNumber());
    }
    const doubleArr = doubleArray(arr);
    const shuffleArray = shuffle(doubleArr);
    //const gameObj = {}
    return shuffleArray;
  }
}

export default Game;
