import React from 'react';
import '../App.css';
import CheckBoxes from './CheckBoxes';
import Form from './Form';

const  ControlTable = (props) => {

    return (
      <div className="control-table">
            <div className="left-side">
                  <h6>Roman Numbers?</h6>
                  <CheckBoxes func={props.changeShowRomanNumbers} value={props.characteristics.showRomanNumbers}/>
                  <h6>Minut Scale Visible?</h6>
                  <CheckBoxes func={props.changeShowMinuteScale} value={props.characteristics.showMinuteScale}/>
                  <h6>Hour Scale Visible?</h6>
                  <CheckBoxes func={props.changeShowHourScale} value={props.characteristics.showHourScale}/>
                  <h6>Radial Direction Of Numbers?</h6>
                  <CheckBoxes func={props.changeRadialDirectionOfNumbers} value={props.characteristics.radialDirectionOfNumbers}/>
                  <h6>Show Numbers?</h6>
                  <CheckBoxes func={props.changeShowNumbers} value={props.characteristics.showNumbers}/>
                  <h6>Outer Ring Visible?</h6>
                  <CheckBoxes  func={props.changeShowOuterRing} value={props.characteristics.showOuterRing}/>
                  <h6>Inner Ring Visible?</h6>
                  <CheckBoxes func={props.changeShowInnerRing} value={props.characteristics.showInnerRing}/>
            </div>
            <div className="right-side">
                  <h6>Width</h6>
                  <Form func={props.changeWidth} value={props.characteristics.width}/>
                  <h6>Number Size</h6>
                  <Form func={props.changeNumberSize} value={props.characteristics.numberSize}/>
                  <h6>Color Of Scales And Numbers</h6>
                  <Form func={props.changeColorOfScalesAndNumbers} value={props.characteristics.colorOfScalesAndNumbers}/>
                  <h6>Color Of Hour Hand</h6>
                  <Form func={props.changeHourHandColor} value={props.characteristics.hourHandColor}/>
                  <h6>Color Of Minute Hand</h6>
                  <Form func={props.changeMinuteHandColor} value={props.characteristics.minuteHandColor}/>
                  <h6>Color Of Second Hand</h6>
                  <Form func={props.changeSecondHandColor} value={props.characteristics.secondHandColor}/>
                  <h6>Color Of Inner Circle</h6>
                  <Form func={props.changeInnerCircleColor} value={props.characteristics.innerCircleColor}/>
                  <h6>Color Of Center Dot</h6>
                  <Form func={props.changeCenterDotColor} value={props.characteristics.centerDotColor}/>
            </div>
      </div>
    );
}

export default ControlTable;