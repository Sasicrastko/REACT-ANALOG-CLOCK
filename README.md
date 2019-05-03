![downloads](https://img.shields.io/npm/dt/ras-react-component.svg)
![language](https://img.shields.io/badge/language-ES%206-brightgreen.svg)
![license](https://img.shields.io/badge/license-ISC-brightgreen.svg)

# REACT ANALOG CLOCK

Just an analog clock for your React app.

## NPM

[ras-react-component](https://www.npmjs.com/package/ras-react-component)

## Demo

[DEMO](https://react-analog-clock-component.herokuapp.com/)!
You can play with the clock [HERE](https://react-analog-clock-component.herokuapp.com/)! and choose the look of it by setting its characteristics online!

## Installation

Add this analog clock to your project by executing `npm install --save ras-react-component` or `yarn add ras-react-component`.

## Usage

An example of usage:

```js
import React, { Component } from 'react';
import AnalogClock from 'ras-react-component';

const style = {
    showRomanNumbers: false,
    showMinuteScale: true,
    showHourScale: true,
    showNumbers: true,
    radialDirectionOfNumbers: false,
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
    iana: `Europe/Dublin`
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

export default App;
```


## Properties

|Prop name|Description|Example values|Default value|
|----|----|----|----|
|showRomanNumbers|Boolean value that determines what kind of numbers will be rendered, Roman or Arabic|`true` or `false` | `false` |
|showMinuteScale|Boolean value that determines if the minute scale should be  rendered.|`true` or `false` | `true` |
|showHourScale|Boolean value that determines if the hour scale should be rendered.|`true` or `false` | `true` |
|showNumbers|Boolean value that will determines if the numbers should be rendered.|`true` or `false` | `true` |
|radialDirectionOfNumbers|Boolean value that determines if the numbers should be rendered radialy. By default they are rendered horizontally|`true` or `false` | `false` |
|colorOfScalesAndNumbers|String that determines color of the scales and the numbers.|`"black"` or `"#1a1a1a"` or `"rgb(255,0,0)"` or `"transparent"` | `"black"` |
|hourHandColor|String that determines color of the hour hand.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"#151515"`|
|minuteHandColor|Stringthat determines color of the minute hand.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"black"`|
|secondHandColor|String that determines color of the second hand.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"red"`|
|firstCircleColor|String that determines color of the first  concentric circle.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"white"`|
|secondCircleColor|String that determines color of the second concentric circle.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"white"`|
|thirdCircleColor|String that determines color of the third concentric circle.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"white"`|
|fourthCircleColor|String that determines color of the fourth concentric circle.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"black"`|
|centerDotColor|String that determines color of the dot in the center.|`"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"` | `"black"`|
|width|Number that determines clock width (in pixels). It should be an integer. |`400` | `300`|
|numberSize|Number that determines the size of the numbers. It should be an integer. |`400` | `300`|
|iana|String that determines the time zone. It should be in [IANA](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. |`America/Chicago` | `""`|

## License

[The ISC License](https://opensource.org/licenses/ISC)

## Author

Rastko Sasic
