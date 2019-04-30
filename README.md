![downloads](https://img.shields.io/npm/dt/ras-react-component.svg)
![language](https://img.shields.io/badge/language-ES%206-lightgreen.svg)

# React Analog Clock

Just an analog clock for your React app.


## Demo

[DEMO](https://react-analog-clock-component.herokuapp.com/)  is available!
You can play with the clock and choose the look of it by setting its characteristics online!

## Installation

Add this clock to your project by executing `npm install --save ras-react-component` or `yarn add ras-react-component`.

## Usage

An example of usage:

```js
import React, { Component } from 'react';
import AnalogClock from 'ras-react-component';

const style = {
  showRomanNumbers: true,
  showMinuteScale: false,
  showHourScale: true,
  showNumbers: true,
  radialDirectionOfNumbers: true,
  showOuterRing: true,
  showInnerRing: false,
  colorOfScalesAndNumbers: `blue`,
  hourHandColor: `green`,
  minuteHandColor: `brown`,
  secondHandColor: `black`,
  innerCircleColor: `yellow`,
  centerDotColor: `black`,
  width: 300,
  numberSize: 100,
  iana: 'Europe/Dublin'
}

class App extends Component {

  render() {
    return (
      <div>
        <AnalogClock style={style}/>
      </div>
    );
  }
}
```


## Properties

|Prop name|Description|Example values|Default value|
|----|----|----|----|
|showRomanNumbers|This is Boolean value that will define what kind of numbers will be rendered, Roman or Arabic|`true` or `false` | `false` |
|showMinuteScale|This is Boolean value that will define if the minute scale is rendered. Defaults to `true`.|`true` or `false` | `true` |

## License

The ISC License.

## Author

Rastko Sasic
