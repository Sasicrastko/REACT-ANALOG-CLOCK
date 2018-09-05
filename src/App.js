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
    numberSize: 280
}


class App extends Component {
  constructor(props){
    super(props);
        this.state = {
          characteristics : defaultCharacteristics
        }
        this.changeShowRomanNumbers = this.changeShowRomanNumbers.bind(this);
        this.changeShowMinuteScale = this.changeShowMinuteScale.bind(this);
        this.changeShowHourScale = this.changeShowHourScale.bind(this); 
        this.changeRadialDirectionOfNumbers = this.changeRadialDirectionOfNumbers.bind(this);
        this.changeShowNumbers = this.changeShowNumbers.bind(this);
        this.changeShowOuterRing = this.changeShowOuterRing.bind(this);
        this.changeShowInnerRing = this.changeShowInnerRing.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
        this.changeNumberSize = this.changeNumberSize.bind(this);
        this.changeColorOfScalesAndNumbers = this.changeColorOfScalesAndNumbers.bind(this);

}

  changeShowRomanNumbers(){
    var characteristics = this.state.characteristics;
    characteristics.showRomanNumbers = !this.state.characteristics.showRomanNumbers;
    this.setState({characteristics : characteristics});
  }

  changeShowMinuteScale(){
    var characteristics = this.state.characteristics;
    characteristics.showMinuteScale = !this.state.characteristics.showMinuteScale;
    this.setState({characteristics : characteristics});
  }

  changeShowHourScale(){
    var characteristics = this.state.characteristics;
    characteristics.showHourScale = !this.state.characteristics.showHourScale;
    this.setState({characteristics : characteristics});
  }

  changeShowNumbers(){
    var characteristics = this.state.characteristics;
    characteristics.showNumbers = !this.state.characteristics.showNumbers;
    this.setState({characteristics : characteristics});
  }

  changeRadialDirectionOfNumbers(){
    var characteristics = this.state.characteristics;
    characteristics.radialDirectionOfNumbers = !this.state.characteristics.radialDirectionOfNumbers;
    this.setState({characteristics : characteristics});
  }

  changeShowOuterRing(){
    var characteristics = this.state.characteristics;
    characteristics.showOuterRing = !this.state.characteristics.showOuterRing;
    this.setState({characteristics : characteristics});
  }

  changeShowInnerRing(){
    var characteristics = this.state.characteristics;
    characteristics.showInnerRing = !this.state.characteristics.showInnerRing;
    this.setState({characteristics : characteristics});
  }

  changeWidth(width){
    var characteristics = this.state.characteristics;
    characteristics.width = width;
    this.setState({characteristics : characteristics});
  }

  changeNumberSize(size){
    var characteristics = this.state.characteristics;
    characteristics.numberSize = size;
    this.setState({characteristics : characteristics});
  }

  changeColorOfScalesAndNumbers(color){
    var characteristics = this.state.characteristics;
    characteristics.colorOfScalesAndNumbers = color;
    this.setState({characteristics : characteristics});
  }



  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header/>
        <Clock characteristics={this.state.characteristics}/>
        <ControlTable characteristics={this.state.characteristics} 
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
        />
      </div>
    );
  }
}

export default App;
