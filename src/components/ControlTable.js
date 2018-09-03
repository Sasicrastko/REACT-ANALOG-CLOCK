import React, { Component } from 'react';
import '../App.css';
import CheckBoxes from './CheckBoxes';


class ControlTable extends Component {
  render() {
    return (
      <div className="control-table">
            <h6>Roman Numbers</h6>
            <CheckBoxes func={this.props.changeShowRomanNumbers} value={this.props.characteristics.showRomanNumbers}/>
            <h6>B</h6>
            <CheckBoxes/>
            <h6>C</h6>
            <CheckBoxes/>
            <h6>D</h6>
            <CheckBoxes/>
            <h6>E</h6>
            <CheckBoxes/>
            <h6>F</h6>
            <CheckBoxes/>

      </div>
    );
  }
}

export default ControlTable;