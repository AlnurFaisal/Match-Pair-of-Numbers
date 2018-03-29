import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Game from "./Game/Game";

class App extends Component {
  constructor(){
    super();
    this.state={
      gameLevels:[{level: 1, squares: 3}, {level: 2, squares: 4}, {level: 3, squares: 6}, 
        {level: 4, squares: 8}, {level: 5, squares: 12}],
      currentLevel: 0
    };
  }

  setGameLevel() {
    const copyCurrentLevel = this.state.currentLevel;
    const copyGameLevels = [...this.state.gameLevels];
    return copyGameLevels[copyCurrentLevel];
  }  

  render() {
    return <Game gameLevel={this.setGameLevel.bind(this)()} />;
  }

}

export default App;
