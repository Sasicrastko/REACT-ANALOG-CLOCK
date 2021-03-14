/** *  examples/src/index.js ** */
import React from "react"
import { render } from "react-dom"
import AnalogClock from "../../src/index"

const json = `
{
    "width": 300,
    "numerals": "eastern_arabic",
    "showNumbers": false,
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
    "iana": "Europe/London"
  }`

const testingData = JSON.parse(json)

const App = () => <AnalogClock characteristics={testingData} />
render(<App />, document.getElementById("root"))
