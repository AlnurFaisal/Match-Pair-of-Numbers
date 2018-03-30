import React, { Component } from "react";

class Home2 extends Component {
  constructor() {
    super();
    this.state = {
      gameLevels: [
        { level: 1, squares: 4 },
        { level: 2, squares: 6 },
        { level: 3, squares: 8 },
        { level: 4, squares: 12 },
        { level: 5, squares: 15 }
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
