import React, { Component } from "react";
import "./Square.css";
import SquareItem from "../SquareItem/SquareItem";

class Square extends Component {

  constructor(){
    super();
    this.state = {
      toHide: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ toHide: true }), 5000);
  }

  handleClick(index, event) {
    this.props.toggleShow();
    const currentVal = this.props.getCurrentValue();
    if (currentVal === null) {
      this.props.setCurrentValue(this.props.numberObj.value);
      this.props.setCurrentIndex(index);
    } else {
      const checkMatch = this.props.checkIfMatch(this.props.numberObj.value);
      if (checkMatch === false) {
        this.props.toggleShowForPair(index);
        // call function to set numbers as not matched
      } else {
        // call function to set numbers as matched
        this.props.setMatch(index);
      }
      this.props.setCurrentValue(null);
    }
  }

  gettoHide() {
    return this.state.toHide;
  }

  render() {
    const showOrHideCssProperty = this.props.numberObj.show ? "show" : "hide";
    const isMatch = this.props.numberObj.isMatched ? "match" : "square1 cursorpoint";

    return (
      <SquareItem handleClick={this.handleClick.bind(this, this.props.index)} 
      numberObj={this.props.numberObj} gettoHide={this.gettoHide.bind(this)} 
      showOrHideCssProperty={showOrHideCssProperty} isMatch={isMatch}
      getMatches={this.props.getMatches} />
    );
  }
}

export default Square;
