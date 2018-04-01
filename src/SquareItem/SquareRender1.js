import React from 'react';

const SquareRender1 = (props) => (
    <div className={props.isMatch}>
        <h1 id={props.showOrHideCssProperty}
            onClick={props.handleClick}
        >
          {props.numberObj.value}
        </h1>
    </div>
);

export default SquareRender1;
