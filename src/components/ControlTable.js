import React, { Component } from 'react';
import '../App.css';
import CheckBoxes from './CheckBoxes';


class ControlTable extends Component {
  render() {
    return (
      <div className="control-table">
            <h6>Roman Numbers?</h6>
            <CheckBoxes func={this.props.changeShowRomanNumbers} value={this.props.characteristics.showRomanNumbers}/>
            <h6>Minut Scale Visible?</h6>
            <CheckBoxes func={this.props.changeShowMinuteScale} value={this.props.characteristics.showMinuteScale}/>
            <h6>Hour Scale Visible?</h6>
            <CheckBoxes func={this.props.changeShowHourScale} value={this.props.characteristics.showHourScale}/>
            <h6>Radial Direction Of Numbers?</h6>
            <CheckBoxes func={this.props.changeRadialDirectionOfNumbers} value={this.props.characteristics.radialDirectionOfNumbers}/>
            <h6>Outer Ring Visible?</h6>
            <CheckBoxes  func={this.props.changeShowOuterRing} value={this.props.characteristics.showOuterRing}/>
            <h6>Inner Ring Visible?</h6>
            <CheckBoxes func={this.props.changeShowInnerRing} value={this.props.characteristics.showInnerRing}/>

      </div>
    );
  }
}

export default ControlTable;