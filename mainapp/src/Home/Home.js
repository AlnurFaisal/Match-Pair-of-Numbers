import React, { Component } from "react";
import { Button, Jumbotron, Container } from "reactstrap";

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
          <Button
            outline
            color="success"
            onClick={this.props.start()}
            size="lg"
          >
            Begin
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
