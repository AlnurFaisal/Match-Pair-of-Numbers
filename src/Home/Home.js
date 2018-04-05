import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="sec-one">
          <div className="container">
            <h1 className="hometitle">Find The Pair</h1>
            <p className="hometext">Click on the button below to begin!</p>
            <Link to="/game">Begin</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
