/***  examples/src/index.js ***/
import React from 'react';
import { render } from 'react-dom';
import AnalogClock from '../../src/index';

const json = `
{
    "width": 450,
    "numerals": "",
    "showMinuteScale": false,
    "showHourScale": false,
    "showNumbers": true,
    "radialDirectionOfNumbers": false,
    "showOuterRing": false,
    "showInnerRing": true,
    "colorOfScalesAndNumbers": "black",
    "hourHandColor": "black",
    "minuteHandColor": "black",
    "secondHandColor": "black",
    "firstCircleColor": "white",
    "secondCircleColor": "white",
    "thirdCircleColor": "white",
    "fourthCircleColor": "black",
    "centerDotColor": "black",
    "numberSize": 100,
    "iana": "America/New_York"
  }`;

  const testingData = JSON.parse(json);


const App = () => (
    <AnalogClock style={testingData}/>
);
render(<App />, document.getElementById("root"));
