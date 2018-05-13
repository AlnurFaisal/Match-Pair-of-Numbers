import React, { Component } from "react";
import Square from "../Square/Square";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { doubleArray, shuffle, generatePositiveNumber } from "../utils/utils";
import { NavLink } from "react-router-dom";
import "./Game.css";
import successlogo from "../img/ok.svg";

class Game7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMap: this.genRandomNumbers(props.gameLevel.squares),
      currentValue: null,
      currentIndex: null,
      countMatches: 0,
      completed: false,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log(this.state.countMatches);
    console.log(this.state.gameMap);
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
              <h6 className="card-title">
                Current Level: Level {this.props.gameLevel.level}
              </h6>
              <p className="card-text">
                Score: {this.state.completed ? this.props.gameLevel.points : 125}
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
                  <NavLink to="/" className="btn btn-primary btn-lg btn-block">
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
            <p className="lead alignp">You have successfully completed the game!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
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
