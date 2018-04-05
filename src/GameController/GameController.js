import React from "react";
import Game from "../Game/Game";

const GameController = props => {
  return (
    <Game
      gameLevel={props.setGameLevel(props.getCurrentLevel())}
      levelUp={props.levelUp}
      currentLevel={props.getCurrentLevel()}
    />
  );
};

export default GameController;
