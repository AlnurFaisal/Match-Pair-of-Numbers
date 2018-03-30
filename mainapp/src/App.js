import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Game from "./Game/Game";

class App extends Component {
  constructor(){
    super();
    this.state={
      gameLevels:[{level: 1, squares: 3}, {level: 2, squares: 4}, {level: 3, squares: 6}, 
        {level: 4, squares: 8}, {level: 5, squares: 12}, {level: 6, squares: 15}],
      currentLevel: 0
    };
  }

  setGameLevel(level) {
    const copyGameLevels = [...this.state.gameLevels];
    if(level === undefined){
      const copyCurrentLevel = this.state.currentLevel;
      return copyGameLevels[copyCurrentLevel];
    } else {
      console.log("i am here!");
      return copyGameLevels[level];
    }
  }  

  levelUp() {
    let copyLevel = this.state.currentLevel;
    copyLevel = copyLevel + 1;
    this.setGameLevel.bind(this)(copyLevel);
    this.setState({
      currentLevel: copyLevel
    });
  }


  render() {
    return(
      <div>
        <br /><br />
        <Game gameLevel={this.setGameLevel.bind(this)()} levelUp={this.levelUp.bind(this)} />;
      </div>
    ); 
  }

}

export default App;
