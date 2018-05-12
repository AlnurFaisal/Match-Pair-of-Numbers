import React, { Component } from "react";
import GameController from "../GameController/GameController";

class Home2 extends Component {
  constructor() {
    super();
    this.state = {
      gameLevels: [
        { level: 1, squares: 4, points: 5, time: 3000 },
        { level: 2, squares: 6, points: 15, time: 4000 },
        { level: 3, squares: 8, points: 30, time: 6000 },
        { level: 4, squares: 12, points: 50, time: 10000 },
        { level: 5, squares: 15, points: 75, time: 12000 }
      ],
      currentLevel: 0
    };
  }

  setGameLevel(level) {
    const copyGameLevels = [...this.state.gameLevels];
    console.log("i am here!");
    return copyGameLevels[level];
  }

  levelUp() {
    let copyLevel = this.state.currentLevel;
    copyLevel = copyLevel + 1;
    this.setState({
      currentLevel: copyLevel
    });
  }

  getCurrentLevel() {
    const copyCurrentLevel = this.state.currentLevel;
    return copyCurrentLevel;
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <GameController
          gameLevel={this.setGameLevel.bind(this)}
          levelUp={this.levelUp.bind(this)}
          getCurrentLevel={this.getCurrentLevel.bind(this)}
        />;
      </div>
    );
  }
}

export default Home2;