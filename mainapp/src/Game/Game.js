import React, { Component } from "react";
import Square from "../Square/Square";
import { doubleArray, shuffle, generatePositiveNumber } from "../utils/utils";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      // gameMap: this.genRandomNumbers(),
      gameMap: this.genRandomNumbers(),
      currentValue: null,
      currentIndex: null
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-1">
            <div className="css-grid-container1">
              {this.state.gameMap.map((element, i) => {
                return (
                  <Square
                    index={i}
                    key={i}
                    toggleShow={this.toggleShow.bind(this, i)}
                    toggleShowForPair={this.toggleShowForPair.bind(this, i)}
                    numberObj={element}
                    setCurrentValue={this.setCurrentValue.bind(this)}
                    setCurrentIndex={this.setCurrentIndex.bind(this)}
                    setMatch={this.setMatch.bind(this)}
                    checkIfMatch={this.checkIfMatch.bind(this)}
                    getCurrentValue={this.getCurrentValue.bind(this)}
                    getMatches={this.getMatches.bind(this, i)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleShow(index) {
    const copy = [...this.state.gameMap];
    if (copy[index].show === true) {
      copy[index].show = false;
    } else {
      copy[index].show = true;
    }
    this.setState({
      gameMap: copy
    });
  }

  toggleShowForPair(index) {
    const copy = [...this.state.gameMap];
    setTimeout(() => {
      if (copy[index].show === true) {
        copy[index].show = false;
        copy[this.state.currentIndex].show = false;
        this.setState({
          gameMap: copy
        });
      }
    } , 1000) 
  }

  setCurrentValue(element) {
    this.setState({
      currentValue: element
    });
  }

  setCurrentIndex(index) {
    this.setState({
      currentIndex: index
    });
  }

  setMatch(i) {
    const copyGameMap = [...this.state.gameMap];
    copyGameMap[i].isMatched = true;
    copyGameMap[this.state.currentIndex].isMatched = true;
    this.setState({
      gameMap: copyGameMap
    });
  }

  getCurrentValue() {
    return this.state.currentValue;
  }

  getMatches(index) {
    const copy = [...this.state.gameMap];
    const isMatched = copy[index].isMatched;
    return isMatched;
  }

  checkIfMatch(value) {
    if (value === this.state.currentValue) {
      return true;
    } else {
      return false;
    }
  }

  genRandomNumbers() {
    let arr = [];
    const ITERATIONS = 6;
    for (let i = 0; i < ITERATIONS; i++) {
      arr.push(generatePositiveNumber());
    }
    const doubleArr = doubleArray(arr);
    const shuffleArray = shuffle(doubleArr);
    const gameObj = [];
    for (let i = 0; i < shuffleArray.length; i++) {
      gameObj[i] = { value: shuffleArray[i], isMatched: false, show: false };
    }
    return gameObj;
  }
}

export default Game;
