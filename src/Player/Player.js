import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import uuidv4 from "uuid/v4";
import "./Player.css";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      difficulty: "easy",
      score: 0,
      level: 1,
      redirect: false,
      home: false
    };

    this.changeHandlerName = this.changeHandlerName.bind(this);
    this.changeHandlerAge = this.changeHandlerAge.bind(this);
    this.changeHandlerDifficulty = this.changeHandlerDifficulty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/game" />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <br />
              <br />
              <div className="wrapper">
                <div className="cardNew">
                  <div className="card-body styleCard">
                    <h1 className="playertitle">Player Info:</h1>
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup row>
                        <Label
                          for="Name"
                          md={2}
                          xs={12}
                          bzsize="lg"
                          className="labelForm"
                        >
                          Name:
                        </Label>
                        <Col md={10} xs={12}>
                          <Input
                            type="text"
                            name="Name"
                            id="Name"
                            bzsize="lg"
                            placeholder="Enter your name..."
                            onChange={this.changeHandlerName}
                            value={this.state.name}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for="Age"
                          md={2}
                          xs={12}
                          bzsize="lg"
                          className="labelForm"
                        >
                          Age:
                        </Label>
                        <Col md={10} xs={12}>
                          <Input
                            type="number"
                            name="Age"
                            id="Age"
                            bzsize="lg"
                            placeholder="Enter your age..."
                            onChange={this.changeHandlerAge}
                            value={this.state.age}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for="Difficulty"
                          md={2}
                          xs={12}
                          bzsize="lg"
                          className="labelForm"
                        >
                          Difficulty:
                        </Label>
                        <Col md={10} xs={12}>
                          <Input
                            type="select"
                            name="Difficulty"
                            id="Difficulty"
                            bzsize="lg"
                            onChange={this.changeHandlerDifficulty}
                            value={this.state.difficulty}
                          >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md={{ size: 5, offset: 2 }}>
                          <Button bzsize="lg" color="success" type="submit">
                            Submit
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  changeHandlerDifficulty(event) {
    this.setState({
      difficulty: event.target.value
    });
  }

  changeHandlerName(event) {
    this.setState({
      name: event.target.value
    });
  }

  changeHandlerAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const myId = uuidv4();
    const date = new Date();
    const strDate = date.getTime();
    const player = {
      id: myId,
      name: this.state.name,
      age: this.state.age,
      difficulty: this.state.difficulty,
      score: this.state.score,
      level: this.state.level,
      date_created: strDate
    };
    const copyPlayers = [...this.props.players];
    copyPlayers.push(player);
    this.props.updatePlayers(copyPlayers, myId);
    this.setState({
      redirect: true
    });
  }
}

export default Player;
