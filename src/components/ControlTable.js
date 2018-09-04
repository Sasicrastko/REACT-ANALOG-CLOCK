import React, { Component } from 'react';
import '../App.css';
import CheckBoxes from './CheckBoxes';
import Form from './Form';



class ControlTable extends Component {
  render() {
    return (
      <div className="control-table">
            <div className="left-side">
                  <h6>Roman Numbers?</h6>
                  <CheckBoxes func={this.props.changeShowRomanNumbers} value={this.props.characteristics.showRomanNumbers}/>
                  <h6>Minut Scale Visible?</h6>
                  <CheckBoxes func={this.props.changeShowMinuteScale} value={this.props.characteristics.showMinuteScale}/>
                  <h6>Hour Scale Visible?</h6>
                  <CheckBoxes func={this.props.changeShowHourScale} value={this.props.characteristics.showHourScale}/>
                  <h6>Radial Direction Of Numbers?</h6>
                  <CheckBoxes func={this.props.changeRadialDirectionOfNumbers} value={this.props.characteristics.radialDirectionOfNumbers}/>
                  <h6>Show Numbers?</h6>
                  <CheckBoxes func={this.props.changeShowNumbers} value={this.props.characteristics.showNumbers}/>
                  <h6>Outer Ring Visible?</h6>
                  <CheckBoxes  func={this.props.changeShowOuterRing} value={this.props.characteristics.showOuterRing}/>
                  <h6>Inner Ring Visible?</h6>
                  <CheckBoxes func={this.props.changeShowInnerRing} value={this.props.characteristics.showInnerRing}/>
            </div>
            <div className="right-side">
                  <h6>Width</h6>
                  <Form func={this.props.changeWidth} value={this.props.characteristics.width}/>
                  <h6>Number Size</h6>
                  <Form func={this.props.changeNumberSize} value={this.props.characteristics.numberSize}/>
            </div>
      </div>
    );
  }
}

export default ControlTable;