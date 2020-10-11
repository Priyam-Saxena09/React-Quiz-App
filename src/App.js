import React, { Component } from 'react';
import Quiz from "./Quiz/Quiz"
import Result from "./Result/Result"
import { Route } from "react-router-dom" 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Quiz} />
        <Route path="/res" component={Result} />
      </div>
    );
  }
}

export default App;