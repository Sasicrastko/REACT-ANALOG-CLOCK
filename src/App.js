import React, { Component } from 'react';
import './App.css';
import Clock from './clock-components/Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
      </div>
    );
  }
}

export default App;
