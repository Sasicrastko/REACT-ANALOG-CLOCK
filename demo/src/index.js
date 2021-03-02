/** *  examples/src/index.js ** */
import React from 'react'
import { render } from 'react-dom'
import AnalogClock from '../../src/index'

// "width": 270,

const json = `
{
    "width": 300,
    "numerals": "eastern_arabic",
    "showNumbers": true,
    "radialDirectionOfNumbers": true,
    "showOuterRing": false,
    "showInnerRing": true,
    "colorOfScalesAndNumbers": "black",
    "hourHandColor": "black",
    "minuteHandColor": "black",
    "secondHandColor": "red",
    "firstCircleColor": "linear-gradient(red, yellow, green)",
    "secondCircleColor": "white",
    "thirdCircleColor": "white",
    "fourthCircleColor": "yellow",
    "centerDotColor": "black",
    "numberSize": 200,
    "iana": "America/New_York",
    "numbersStyle": {
      "width": "100%",
      "height": "100%",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    }
  }`

const testingData = JSON.parse(json)

const App = () => <AnalogClock characteristics={testingData} />
render(<App />, document.getElementById('root'))
