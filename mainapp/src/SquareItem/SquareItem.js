import React from 'react';
import SquareRender1 from "./SquareRender1";
import SquareRender2 from "./SquareRender2";

const SquareItem = (props) => {
    const toHide = props.gettoHide();
    const isMatched = props.getMatches();
    if(toHide){
        if(isMatched === true){
            return <SquareRender2 numberObj={props.numberObj} isMatch={props.isMatch} />;
        } else {
            return <SquareRender1 handleClick={props.handleClick} numberObj={props.numberObj} 
            showOrHideCssProperty={props.showOrHideCssProperty} isMatch={props.isMatch} />;
        }
    } else {
        return <SquareRender2 numberObj={props.numberObj} isMatch={props.isMatch} />;
    }
}

export default SquareItem;