import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            startGame: false
        }
    }

    startGame() {
        this.setState({
           start: true 
        });
    }

    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-2">Find The Pair</h1>
                        <p class="lead">Click on the button below to begin!</p>
                    </div>
                </div>
                <div class="container-fluid">
                    <button type="button" onClick={this.startGame.bind(this)()} class="btn btn-outline-success btn-lg">Large button</button>
                </div>
            </div>
        );
    }
}

export default Home;
