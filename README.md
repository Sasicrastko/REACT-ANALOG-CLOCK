![downloads](https://img.shields.io/npm/dt/ras-react-component.svg)
![language](https://img.shields.io/badge/language-ES%206-brightgreen.svg)
![license](https://img.shields.io/badge/license-ISC-brightgreen.svg)

# REACT ANALOG CLOCK

Just an analog clock for your React app.

## Github

[Sasicrastko/REACT-ANALOG-CLOCK](https://github.com/Sasicrastko/REACT-ANALOG-CLOCK)

## NPM

[ras-react-component](https://www.npmjs.com/package/ras-react-component)

## Demo

You can play with the clock [HERE](https://glacial-lake-58970.herokuapp.com/) and choose its look by setting characteristics!

## Installation

Add this analog clock to your project by executing `npm install --save ras-react-component` or `yarn add ras-react-component`.

## Elements

The watch consists of the base, minute scale, hour scale, numbers, hands and the center dot. The bese consist of four concentric circles placed one over other. Numbers can be Roman and Arabic and they can take horizontal and radial position.
![elements](https://github.com/Sasicrastko/REACT-ANALOG-CLOCK/blob/master/images/elements1.png "Elements of the clock")

## Usage

An example of usage:

```js
import React, { Component } from "react"
import AnalogClock from "ras-react-component"

const style = {
  numerals: "roman",
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
  iana: `Europe/Dublin`,
}

class App extends Component {
  render() {
    return (
      <div>
        <AnalogClock style={style} />
      </div>
    )
  }
}

export default App
```

## Properties

Since v1.2.0 there is no `showRomanNumbers` but there is `numerals` instead. This enables usage of different numerical systems or characters an emojis.
![numerals](https://github.com/Sasicrastko/REACT-ANALOG-CLOCK/blob/master/images/numerals.png "Examples of different numeral systems")

| Characteristic           | Description                                                                                                                                                  | Example values                                                                                                                                                                                                                                                                                                   | Default value      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| width                    | Number that determines clock width (in pixels). It should be an integer.                                                                                     | `400`                                                                                                                                                                                                                                                                                                            | `300`              |
| numerals                 | Array or string that determines what numerical system is used for numbers. Default value is `"western_arabic"`. If it is array all elements must be strings. | `"western_arabic"`, `"eastern_arabic"`, `"roman"`, `"persian"`, `"chinese"`, `"devanagari”"`, `"tamil"`, `"bengali"`, `"gujarati"`, `"korean"`, `"hebrew"` or a string array like `["", "", "3","", "", "6","", "", "9","", "", "12"]` or with emojis `["🐴","🐮","🐷","🐹","🐗","🐻","🐔","🐵","🐶","🦊","🐱"]` | `"western_arabic"` |
| showMinuteScale          | Boolean value that determines if the minute scale should be rendered.                                                                                        | `true` or `false`                                                                                                                                                                                                                                                                                                | `true`             |
| showHourScale            | Boolean value that determines if the hour scale should be rendered.                                                                                          | `true` or `false`                                                                                                                                                                                                                                                                                                | `true`             |
| showNumbers              | Boolean value that determines if the numbers should be rendered.                                                                                             | `true` or `false`                                                                                                                                                                                                                                                                                                | `true`             |
| radialDirectionOfNumbers | Boolean value that determines if the numbers should be rendered radialy. By default they are rendered horizontally                                           | `true` or `false`                                                                                                                                                                                                                                                                                                | `false`            |
| colorOfScalesAndNumbers  | String that determines color of the scales and the numbers.                                                                                                  | `"black"` or `"#1a1a1a"` or `"rgb(255,0,0)"` or `"transparent"`                                                                                                                                                                                                                                                  | `"black"`          |
| hourHandColor            | String that determines color of the hour hand.                                                                                                               | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"#151515"`        |
| minuteHandColor          | String that determines color of the minute hand.                                                                                                             | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"black"`          |
| secondHandColor          | String that determines color of the second hand.                                                                                                             | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"red"`            |
| firstCircleColor         | String that determines color of the first concentric circle.                                                                                                 | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"white"`          |
| secondCircleColor        | String that determines color of the second concentric circle.                                                                                                | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"white"`          |
| thirdCircleColor         | String that determines color of the third concentric circle.                                                                                                 | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"white"`          |
| fourthCircleColor        | String that determines color of the fourth concentric circle.                                                                                                | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"black"`          |
| centerDotColor           | String that determines color of the dot in the center.                                                                                                       | `"black"` or `"#1a1a1a"` or `"rgb(15,15,15)"` or `"transparent"`                                                                                                                                                                                                                                                 | `"black"`          |
| numberSize               | Number that determines the size of the numbers. It should be an integer.                                                                                     | `400`                                                                                                                                                                                                                                                                                                            | `200`              |
| iana                     | String that determines the time zone. It should be in [IANA](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.                           | `"America/Chicago"` or `undefined`, `null` and `""` for local time                                                                                                                                                                                                                                               | `"Europe/London"`  |

## Examples

The look of the watch can be set on many ways and some of examples are on the image bellow.
![examples](https://github.com/Sasicrastko/REACT-ANALOG-CLOCK/blob/master/images/examples.png "Elements of the clock")

## License

[The ISC License](https://opensource.org/licenses/ISC)

## Author

Rastko Sasic
