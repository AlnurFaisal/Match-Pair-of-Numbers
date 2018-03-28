import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor() {
    super();
    this.state = {
      noshow: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ noshow: true }), 5000);
  }

  handleClick(index, event) {
    if(this.state.noshow === false){
        event.preventDefault();
    }
    const currentVal = this.props.getCurrentValue();
    if(currentVal === null){
        this.props.setCurrentValue(this.props.numberObj.value);
        this.props.setCurrentIndex(index);
    } else {
        const checkMatch = this.props.checkIfMatch(this.props.numberObj.value);
        if(checkMatch === false){
            // call function to set numbers as not matched
            
        } else {
            // call function to set numbers as matched    
            this.props.setMatch(index);
        }
        this.props.setCurrentValue(null);
    }
    
    this.setState({ noshow: false });
  }

  render() {
    return (
      <div className="square1" className={this.props.numberObj.isMatched ? "match" : "square1 point"}>
        <h1
          className={this.state.noshow ? "fade point" : "display-4 fade.show"}
          onClick={this.handleClick.bind(this, this.props.index)}
        >
          {this.props.numberObj.value}
        </h1>
      </div>
    );
  }
}

export default Square;
