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
    firstCircleColor: `white`,
    secondCircleColor: `white`,
    thirdCircleColor: `white`,
    fourthCircleColor: `black`,
    centerDotColor: `black`,
    width: 300,
    numberSize: 150,
    iana: ``
}


class App extends Component {

  constructor(props){
    super(props);
        this.state = {
          characteristics : defaultCharacteristics
        }
}

  changeShowRomanNumbers = () => {
    let characteristics = this.state.characteristics;
    characteristics.showRomanNumbers = !this.state.characteristics.showRomanNumbers;
    this.setState({characteristics : characteristics});
  }

  changeShowMinuteScale = () => {
    let characteristics = this.state.characteristics;
    characteristics.showMinuteScale = !this.state.characteristics.showMinuteScale;
    this.setState({characteristics : characteristics});
  }

  changeShowHourScale = () => {
    let characteristics = this.state.characteristics;
    characteristics.showHourScale = !this.state.characteristics.showHourScale;
    this.setState({characteristics : characteristics});
  }

  changeShowNumbers = () => {
    let characteristics = this.state.characteristics;
    characteristics.showNumbers = !this.state.characteristics.showNumbers;
    this.setState({characteristics : characteristics});
  }

  changeRadialDirectionOfNumbers = () => {
    let characteristics = this.state.characteristics;
    characteristics.radialDirectionOfNumbers = !this.state.characteristics.radialDirectionOfNumbers;
    this.setState({characteristics : characteristics});
  }

  changeShowOuterRing = () => {
    let characteristics = this.state.characteristics;
    characteristics.showOuterRing = !this.state.characteristics.showOuterRing;
    this.setState({characteristics : characteristics});
  }

  changeShowInnerRing = () => {
    let characteristics = this.state.characteristics;
    characteristics.showInnerRing = !this.state.characteristics.showInnerRing;
    this.setState({characteristics : characteristics});
  }

  changeWidth = (width) => {
    let characteristics = this.state.characteristics;
    characteristics.width = width;
    this.setState({characteristics : characteristics});
  }

  changeNumberSize = (size) => {
    let characteristics = this.state.characteristics;
    characteristics.numberSize = size;
    this.setState({characteristics : characteristics});
  }

  changeColorOfScalesAndNumbers = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.colorOfScalesAndNumbers = color;
    this.setState({characteristics : characteristics});
  }

  changeHourHandColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.hourHandColor = color;
    this.setState({characteristics : characteristics});
  }

  changeMinuteHandColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.minuteHandColor = color;
    this.setState({characteristics : characteristics});
  }

  changeSecondHandColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.secondHandColor = color;
    this.setState({characteristics : characteristics});
  }

  changeFirstCircleColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.firstCircleColor = color;
    this.setState({characteristics : characteristics});
  }

  changeSecondCircleColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.secondCircleColor = color;
    this.setState({characteristics : characteristics});
  }

  changeThirdCircleColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.thirdCircleColor = color;
    this.setState({characteristics : characteristics});
  }

  changeFourthCircleColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.fourthCircleColor = color;
    this.setState({characteristics : characteristics});
  }

  changeCenterDotColor = (color) => {
    let characteristics = this.state.characteristics;
    characteristics.centerDotColor = color;
    this.setState({characteristics : characteristics});
  }

  changeTimeZone = (iana) => {
    let characteristics = this.state.characteristics;
    characteristics.iana = iana;
    this.setState({characteristics : characteristics});
  }


  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <Header/>
        <Clock characteristics={this.state.characteristics}/>
        <ControlTable 
                      characteristics={this.state.characteristics} 
                      changeShowRomanNumbers={this.changeShowRomanNumbers}
                      changeShowMinuteScale={this.changeShowMinuteScale}
                      changeShowHourScale={this.changeShowHourScale}
                      changeRadialDirectionOfNumbers={this.changeRadialDirectionOfNumbers}
                      changeShowNumbers={this.changeShowNumbers}
                      changeShowOuterRing={this.changeShowOuterRing}
                      changeShowInnerRing={this.changeShowInnerRing}
                      changeWidth={this.changeWidth}
                      changeNumberSize={this.changeNumberSize}
                      changeColorOfScalesAndNumbers={this.changeColorOfScalesAndNumbers}
                      changeHourHandColor={this.changeHourHandColor}
                      changeMinuteHandColor={this.changeMinuteHandColor}
                      changeSecondHandColor={this.changeSecondHandColor}
                      changeFirstCircleColor={this.changeFirstCircleColor}
                      changeSecondCircleColor={this.changeSecondCircleColor}
                      changeThirdCircleColor={this.changeThirdCircleColor}
                      changeFourthCircleColor={this.changeFourthCircleColor}
                      changeCenterDotColor={this.changeCenterDotColor}
                      changeTimeZone={this.changeTimeZone}

        />
      </div>
    );
  }
}

export default App;
