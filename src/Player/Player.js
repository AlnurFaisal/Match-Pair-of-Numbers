import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "./Player.css";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      player: {
        name: "",
        age: "",
        score: 0,
        level: 0
      },
      players: [],
      redirect: false
    };

    this.changeHandlerName = this.changeHandlerName.bind(this);
    this.changeHandlerAge = this.changeHandlerAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/game" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <br />
            <br />
            <div className="wrapper">
              <div body className="cardNew">
                <div className="card-body styleCard">
                  <h1 className="playertitle">Player Info:</h1>
                  <br />
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Label
                        for="Name"
                        md={2}
                        xs={12}
                        size="lg"
                        className="labelForm"
                      >
                        Name:
                      </Label>
                      <Col md={10} xs={12}>
                        <Input
                          type="text"
                          name="Name"
                          id="Name"
                          size="lg"
                          placeholder="Enter your name..."
                          onChange={this.changeHandlerName}
                          value={this.state.player.name}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label
                        for="Age"
                        md={2}
                        xs={12}
                        size="lg"
                        className="labelForm"
                      >
                        Age:
                      </Label>
                      <Col md={10} xs={12}>
                        <Input
                          type="number"
                          name="Age"
                          id="Age"
                          size="lg"
                          placeholder="Enter your age..."
                          onChange={this.changeHandlerAge}
                          value={this.state.player.age}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md={{ size: 10, offset: 2 }}>
                        <Button size="lg" color="success" type="submit">Submit</Button>
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

  changeHandlerName(event) {
    this.setState({
      player: {
        name: event.target.value
      }
    });
  }

  changeHandlerAge(event) {
    this.setState({
      player: {
        age: event.target.value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const copyPlayer = { ...this.state.player };
    const copyPlayers = [...this.state.players];
    copyPlayers.push(copyPlayer);
    this.setState({
      players: copyPlayers,
      redirect: true
    });
  }
}

export default Player;
