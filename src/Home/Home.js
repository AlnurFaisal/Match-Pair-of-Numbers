import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Home.css";
import Player from "../Player/Player";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };

    this.runRedirect = this.runRedirect.bind(this);
  }

  render() {
    if(this.state.redirect) {
      return <Player players={this.props.players} updatePlayers={this.props.updatePlayers}/>;
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
                <Button size="lg" color="success" onClick={this.runRedirect} className="shadow" block>
                  Begin
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
}

export default Home;
