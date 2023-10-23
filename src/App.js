import React, { Component } from 'react';
import './App.css';
import Goal from './Goal.js';

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>To do List</h1>
          <Goal></Goal>
          <Goal></Goal>
          <Goal></Goal>
          <Goal></Goal>
        </div>
      );
  }
}

export default App;
