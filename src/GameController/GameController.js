import React from "react";
import Game from "../Game/Game";
import Game1 from "../Game/Game1";
import Game2 from "../Game/Game2";
import Game3 from "../Game/Game3";
import Game4 from "../Game/Game4";
import Game5 from "../Game/Game5";
import Game6 from "../Game/Game6";
import Game7 from "../Game/Game7";

const GameController = props => {
  const currentLevel = props.getCurrentLevel();
  if (currentLevel === 0) {
    return (
      <Game
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[0]}
      />
    );
  } else if (currentLevel === 1) {
    return (
      <Game1
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[1]}
      />
    );
  } else if (currentLevel === 2) {
    return (
      <Game2
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[2]}
      />
    );
  } else if (currentLevel === 3) {
    return (
      <Game3
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[3]}
      />
    );
  } else if (currentLevel === 4) {
    return (
      <Game4
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[4]}
      />
    );
  } else if (currentLevel === 5) {
    return (
      <Game5
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[5]}
      />
    );
  } else if (currentLevel === 6) {
    return (
      <Game6
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[6]}
      />
    );
  } else if (currentLevel === 7) {
    return (
      <Game7
        gameLevel={props.gameLevel(currentLevel)}
        levelUp={props.levelUp}
        players={props.players}
        updatePlayers={props.updatePlayers}
        playerId={props.playerId}
        difficultyLevel={props.difficultyLevels[7]}
      />
    );
  }
};

export default GameController;
