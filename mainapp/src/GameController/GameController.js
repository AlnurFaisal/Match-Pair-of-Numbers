import React from 'react';
import Game from "../Game/Game";
import { Button } from 'reactstrap';

const GameController = (props) => {
    const currentLevel =  props.getCurrentLevel();

    return <Game gameLevel={props.gameLevel(currentLevel)} levelUp={props.levelUp} />;

};

export default GameController;
