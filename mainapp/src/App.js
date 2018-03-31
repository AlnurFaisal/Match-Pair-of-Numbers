import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import HomeNav from "./Home/HomeNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
   return (
     <div>
      <BrowserRouter>
        <HomeNav /> 
      </BrowserRouter>
     </div>
   );
  }
}

export default App;
