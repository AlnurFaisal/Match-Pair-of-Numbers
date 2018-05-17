import React, { Component } from "react";
import { Button } from "reactstrap";
import Home from "../Home/Home";
import "./Leaderboard.css";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.sortPlayers(),
      home: false
    };

    this.goBack = this.goBack.bind(this);
  }

  render() {
    if (this.state.home) {
      return (
        <Home
          players={this.props.players}
          updatePlayers={this.props.updatePlayers}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <h1 className="headline" align="center">
              Leaderboard
            </h1>
            <div body className="card cardBorder">
              <div className="card-body cardNew">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Level</th>
                        <th scope="col">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.players.map((element, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{element.name}</td>
                            <td>{element.level}</td>
                            <td>{element.score}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <div className="offset-md-3 col-md-6 col-xs-12">
              <Button
                size="lg"
                color="success"
                onClick={this.goBack}
                className="btn shadow"
                block
              >
                Go Back
              </Button>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }

  goBack() {
    this.setState({
      home: true
    });
  }
}

export default Leaderboard;
