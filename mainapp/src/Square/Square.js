import React, { Component } from "react";
import "./Square.css";

class Square extends Component{
    constructor() {
        super();
        this.state = {
           noshow: false
        }
    }
    
    componentDidMount() {
        setTimeout(()=> this.setState({noshow: true}), 5000);
    }

    handleClick(event) {
        if(this.state.noshow === false){
            event.preventDefault(); 
        } else {
            this.props.setCurrentValue(this.props.number);
            this.setState({noshow: false});
        }
    }


    render(){
        return (
            <div className="square1">
                <h1 
                    className={this.state.noshow ? 'fade point' : 'display-4 fade.show'}
                    onClick={this.handleClick.bind(this)}    
                >{this.props.number}
                </h1>
            </div>       
        );
    }
}





export default Square;
