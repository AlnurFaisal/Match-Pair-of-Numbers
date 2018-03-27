import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Game from "./Game/Game";
import { doubleArray, shuffle, generatePositiveNumber } from "./utils/utils";

class App extends Component {
  render() {
    return <Game gameMap={this.genRandomNumbers()} />;
  }

  genRandomNumbers() {
    let arr = [];
    const ITERATIONS = 6;
    for (let i = 0; i < ITERATIONS; i++) {
      arr.push(generatePositiveNumber());
    }
    const doubleArr = doubleArray(arr);
    const shuffleArray = shuffle(doubleArr);
    return shuffleArray;
  }
}

export default App;
