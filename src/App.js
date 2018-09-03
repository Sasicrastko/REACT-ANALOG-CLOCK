import React, { Component } from 'react';
import './App.css';
import Clock from './clock-components/Clock';
import Header from './components/Header';
import ControlTable from './components/ControlTable';

const defaultCharacteristics = {
    showRomanNumbers: false,
    showMinuteScale: true,
    showHourScale: true,
    showNumbers: true,
    radialDirectionOfNumbers: false,
    showOuterRing: true,
    showInnerRing: true,
    colorOfScalesAndNumbers: `black`,
    hourHandColor: `#151515`,
    minuteHandColor: `black`,
    secondHandColor: `red`,
    innerCircleColor: `white`,
    centerDotColor: `#212131`,
    width: 400,
    numberSize: 180
}


class App extends Component {
  constructor(props){
    super(props);
        this.state = {
          characteristics : defaultCharacteristics
        }
        this.changeShowRomanNumbers = this.changeShowRomanNumbers.bind(this);
}

  changeShowRomanNumbers(){
    var characteristics = this.state.characteristics;
    characteristics.showRomanNumbers = !this.state.characteristics.showRomanNumbers;
    this.setState({characteristics : characteristics});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Clock characteristics={this.state.characteristics}/>
        <ControlTable characteristics={this.state.characteristics} 
                      changeShowRomanNumbers={this.changeShowRomanNumbers}
        />
      </div>
    );
  }
}

export default App;
