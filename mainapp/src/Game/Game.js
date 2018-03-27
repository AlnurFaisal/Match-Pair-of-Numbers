import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super();
        this.state = {
            mapNumbers: { mapkey: props.key, value: props.value }
        };
    }

    render() {
        console.log(this.props);
        return (
            <div>
                
            </div>
        );
    }
}

export default Game;
