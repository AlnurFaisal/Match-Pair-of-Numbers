import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor() {
    super();
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

  render() {
    const showOrHideCssProperty = this.props.numberObj.show ? "show" : "hide";

    return (
      <div
        id={showOrHideCssProperty}
        className={this.props.numberObj.isMatched ? "match" : "square1 point"}
      >
        <h1 onClick={this.handleClick.bind(this, this.props.index)}>
          {this.props.numberObj.value}
        </h1>
      </div>
    );
  }
}

export default Square;
