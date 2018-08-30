import React, { Component } from 'react';
import './App.css';
import Clock from './clock-components/Clock'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Clock/>
      </div>
    );
  }
}

export default App;
