/***  examples/src/index.js ***/
import React from 'react';
import { render } from 'react-dom';
import AnalogClock from '../../src/index';

const json = `
{
    "width": 450,
    "numerals": [1,3,4,7,93,32,2,2],
    "showMinuteScale": true,
    "showHourScale": true,
    "showNumbers": true,
    "radialDirectionOfNumbers": false,
    "showOuterRing": false,
    "showInnerRing": true,
    "colorOfScalesAndNumbers": "blue",
    "hourHandColor": "#151515",
    "minuteHandColor": "black",
    "secondHandColor": "red",
    "firstCircleColor": "white",
    "secondCircleColor": "green",
    "thirdCircleColor": "white",
    "fourthCircleColor": "black",
    "centerDotColor": "black",
    "numberSize": 350,
    "iana": "America/New_York"
  }`;

  const testingData = JSON.parse(json);


const App = () => (
    <AnalogClock style={testingData}/>
);
render(<App />, document.getElementById("root"));
