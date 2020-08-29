import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { base } from "./configureFirebase";
import HomeNav from "./Home/HomeNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      id: ""
    };
  }

  componentWillMount() {
    this.playersRef = base.syncState("players", {
      context: this,
      state: "players"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.playersRef);
  }

  render() {
    console.log(this.state.id);
    return (
      <div>
        <BrowserRouter>
          <HomeNav
            players={this.state.players}
            updatePlayers={this.updatePlayers.bind(this)}
            playerId={this.state.id}
          />
        </BrowserRouter>
      </div>
    );
  }

  updatePlayers(arr, id) {
    if (id) {
      // if id is true, it is creating a new account
      // array may contain multiple object
      this.setState({
        players: arr,
        id: id
      });
    } else {
      // we are modifying existing account
      // array only contain 1 object
      let copyPlayers = [...this.state.players];
      copyPlayers.forEach(player => {
        if (player.id === this.state.id) {
          player.score = arr[0].score;
          player.level = arr[0].level;
          this.setState({
            players: copyPlayers
          });
        }
      });
    }
  }
}

export default App;
