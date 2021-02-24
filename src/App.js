import React from 'react';
import './App.css';
import Clock from './clock-components/Clock';
import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = { }
    this.setCharacteristics = this.setCharacteristics.bind(this);
  }

  setCharacteristics(characteristics) {
    this.setState({ characteristics });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Form  setCharacteristics={this.setCharacteristics}/>
        <Clock characteristics={this.state.characteristics}/>
      </div>
    );
  }
}

export default App;
