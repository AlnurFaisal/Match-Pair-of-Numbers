import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Game from './Game/Game';
import { doubleArray } from "./utils/utils"; 

class App extends Component {

  render() {
    return (
      <Game gamemap={this.genRandomNumbers()}   />
    );
  }

  genRandomNumbers(){
    let arr = [];
    const ITERATIONS = 6;
    for(let i = 0; i < ITERATIONS; i++){
      arr.push(Math.floor(Math.random() * (1 - 100) + 1));
    }
    console.log(arr);
    const doubleArr = doubleArray(arr);

    return arr;
  }
}

export default App;
