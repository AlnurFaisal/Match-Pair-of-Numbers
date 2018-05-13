import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
                  <NavLink to ="/player" className="btn btn-success btn-lg btn-block">Begin</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
