import React, { Component } from "react";
import Square from "../Square/Square";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { doubleArray, shuffle, generatePositiveNumber } from "../utils/utils";
import { NavLink, Redirect } from "react-router-dom";
import "./Game.css";
import successlogo from "../img/ok.svg";
import gameoverlogo from "../img/traffic.svg";

class Game7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMap: this.genRandomNumbers(props.gameLevel.squares),
      currentValue: null,
      currentIndex: null,
      countMatches: 0,
      completed: false,
      modal: false,
      gameover: false,
      players: props.players,
      id: props.playerId,
      score: null,
      name: null,
      difficulty: null,
      failedAttempts: 0,
      redirect: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleGameOver = this.toggleGameOver.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.fetchRemainingAttempts = this.fetchRemainingAttempts.bind(this);
    this.updateFailedAttempts = this.updateFailedAttempts.bind(this);
    this.triggerRedirect = this.triggerRedirect.bind(this);
  }

  componentWillMount() {
    this.getDetails();
  }

  toggleGameOver() {
    this.setState({
      gameover: true
    });
  }

  triggerRedirect() {
    this.setState({
      redirect: true
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  fetchRemainingAttempts() {
    const difficulty = this.props.difficultyLevel;
    const maxAttempt = difficulty[`${this.state.difficulty}`];
    return maxAttempt - this.state.failedAttempts;
  }

  updateFailedAttempts() {
    let currentFailedAttempts = this.state.failedAttempts;
    currentFailedAttempts = currentFailedAttempts + 1;
    this.setState({
      failedAttempts: currentFailedAttempts
    });
  }

  getDetails() {
    this.state.players.forEach(player => {
      console.log(player.id);
      console.log(player.name);
      console.log(player.difficulty);
      if (player.id === this.state.id) {
        this.setState({
          score: player.score,
          name: player.name,
          difficulty: player.difficulty
        });
      }
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="row">
          <div className="col-lg-9 col-md-12 col-xs-12">
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
                    popup={this.popup.bind(this)}
                    timer={this.props.gameLevel.time}
                  />
                );
              })}
            </div>
            <br />
          </div>
          <div className="col-lg-3 col-md-12 col-xs-12">
            <div className="cardNew">
              <div className="card-body game">
                <h4 className="card-title">
                  Current Level: Level {this.props.gameLevel.level}
                </h4>
                <p className="card-text">
                  Attempts Remaining: {this.fetchRemainingAttempts()}
                  <br />
                  Difficulty: {this.state.difficulty}
                  <br />
                  <br />
                  PlayerName: {this.state.name} <br />
                  Score:{" "}
                  {this.state.completed
                    ? this.props.gameLevel.points
                    : this.state.score}
                </p>
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <Button
                      size="lg"
                      color="success"
                      className="btn btn-success"
                      block
                      disabled
                    >
                      Continue
                    </Button>
                    <br />
                  </div>
                  <div className="col-md-12 col-xs-12">
                    <NavLink
                      to="/"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Quit Game
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              Level {this.props.gameLevel.level} Completed
            </ModalHeader>
            <ModalBody>
              <img
                src={successlogo}
                alt="Success"
                height="100"
                width="100"
                className="image1"
              />
              <h2 className="alignp">Congratulations!!</h2>{" "}
              <p className="lead alignp">
                You have successfully completed the game!
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.gameover} className={this.props.className}>
            <ModalHeader>
              Level {this.props.gameLevel.level} Game Over
            </ModalHeader>
            <ModalBody>
              <img
                src={gameoverlogo}
                alt="Success"
                height="100"
                width="100"
                className="image1"
              />
              <h2 className="alignp">Game Over!</h2>{" "}
              <p className="lead alignp">
                You have exceeded the max attempt for this level!
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.triggerRedirect}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

  popup() {
    const copy = [...this.state.gameMap];
    const copyCountMatches = this.state.countMatches + 2;
    const size = Object.keys(copy).length;
    if (copyCountMatches !== 0) {
      if (copyCountMatches === size) {
        this.toggle();
        this.setState({
          completed: true
        });
        const arr = [
          {
            score: this.props.gameLevel.points,
            level: this.props.gameLevel.level
          }
        ];
        this.props.updatePlayers(arr, false);
      }
    }
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
    }, 500);
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

  checkIfMatch(value, index) {
    if (
      value === this.state.currentValue &&
      index !== this.state.currentIndex
    ) {
      const copyCountMatches = this.state.countMatches + 2;
      this.setState({
        countMatches: copyCountMatches
      });
      return true;
    } else {
      if (this.fetchRemainingAttempts() === 0) {
        this.toggleGameOver();
      } else {
        this.updateFailedAttempts();
      }
      return false;
    }
  }

  genRandomNumbers(gameLevel) {
    let arr = [];
    const ITERATIONS = gameLevel;
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

export default Game7;
