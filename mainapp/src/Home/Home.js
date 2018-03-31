import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-2">Find The Pair</h1>
            <p className="lead">Click on the button below to begin!</p>
          </Container>
        </Jumbotron>

        <div class="container-fluid">
        <Link to ="/game" class="btn btn primary smallbutton">Begin</Link>
        </div>
      </div>
    );
  }
}

export default Home;
