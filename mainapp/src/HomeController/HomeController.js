import React from 'react';
import Home from "../Home/Home";
import Home2 from '../Home/Home2';

const HomeController = (props) => {
    if(props.start === false){
        return <Home start={props.start} />;
    } else {
        return <Home2 />;
        
    }
};

export default HomeController;
