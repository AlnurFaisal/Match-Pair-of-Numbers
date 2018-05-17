import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Home.css";
import Player from "../Player/Player";
import Leaderboard from "../Leaderboard/Leaderboard";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      leaderboard: false
    };

    this.runRedirect = this.runRedirect.bind(this);
    this.leaderboard = this.leaderboard.bind(this);
    this.compare = this.compare.bind(this);
  }

  render() {
    if (this.state.redirect) {
      return (
        <Player
          players={this.props.players}
          updatePlayers={this.props.updatePlayers}
        />
      );
    } else if (this.state.leaderboard) {
      return (
        <Leaderboard
          sortPlayers={this.sortScore.bind(this)}
          players={this.props.players}
          updatePlayers={this.props.updatePlayers}
        />
      );
    }
    return (
      <div>
        <div id="sec-one">
          <div className="container">
            <div className="row">
              <div className="offset-md-1 col-md-10 col-xs-12">
                <h1 className="hometitle">Find The Pair</h1>
                <p className="hometext">Click on the button below to begin!</p>
              </div>
              <div className="offset-md-3 col-md-6 col-xs-12">
                <Button
                  size="lg"
                  color="success"
                  onClick={this.runRedirect}
                  className="shadow"
                  block
                >
                  Begin
                </Button>
                <Button
                  size="lg"
                  color="secondary"
                  onClick={this.leaderboard}
                  className="shadow"
                  block
                >
                  Leaderboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  runRedirect() {
    this.setState({
      redirect: true
    });
  }

  leaderboard() {
    this.setState({
      leaderboard: true
    });
  }

  sortScore() {
    let copyPlayers = [...this.props.players];
    copyPlayers.sort(this.compare);
    return copyPlayers;
  }

  compare(a, b) {
    const scoreA = a.score;
    const scoreB = b.score;

    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = -1;
    } else if (scoreA < scoreB) {
      comparison = 1;
    }
    return comparison;
  }
}

export default Home;
