import React from "react";
import "./Square.css";

const Square = props => {
    return (
        
        <div className="square1">
            <h1 class="display-4">{props.number}</h1>
        </div>

    );
}

export default Square;
