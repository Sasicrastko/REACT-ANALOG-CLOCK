import React, { Component } from 'react';
import './App.css';
import Clock from './clock-components/Clock'
import Header from './components/Header'
import ControlTable from './components/ControlTable'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Clock/>
        <ControlTable/>
      </div>
    );
  }
}

export default App;
