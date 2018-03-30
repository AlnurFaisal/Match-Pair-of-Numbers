import React from 'react';
import Home from "../Home/Home";
import GameController from "./GameController/GameController";

const HomeController = (props) => {
    const start = props.startGame();
    if(start === false){
        return <Home />;
    } else {
        return(
            <div>
              <br /><br />
              <GameController gameLevel={this.setGameLevel.bind(this)} levelUp={this.levelUp.bind(this)} 
              getCurrentLevel={this.getCurrentLevel.bind(this)} />;
            </div>
        ); 
    }
};

export default HomeController;
