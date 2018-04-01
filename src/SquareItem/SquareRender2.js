import React from 'react';

const SquareRender2 = (props) => (
    <div className={props.isMatch}>
        <h1>
          {props.numberObj.value}
        </h1>
    </div>
);

export default SquareRender2;
