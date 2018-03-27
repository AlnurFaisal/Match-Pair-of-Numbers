import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Game from './Game/Game';

class App extends Component {

  render() {
    return (
      <Game gamemap={this.genRandomKeys()}   />
    );
  }

  genRandomNumbers(){
    let arr = [];
    const ITERATIONS = 6;
    for(let i = 0; i < ITERATIONS; i++){
      arr.push(Math.floor(Math.random() * (1 - 100) + 1));
    }
    console.log(arr);
    return arr;
  }

  genRandomKeys(){
    let randomKeys = [];
    const ITERATIONS = 12;
    const min = Math.ceil(1);
    const max = Math.floor(12);
    for(let i = 0; i < ITERATIONS; i++){
      randomKeys.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(randomKeys);
    const randomNumbers = this.genRandomNumbers();
    const testArr = randomKeys.map( function(x, i){
      return {"key": x, "value": randomNumbers[i]}        
    });
    return testArr;
  }
}

export default App;
