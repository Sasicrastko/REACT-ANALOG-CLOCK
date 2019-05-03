import React, { Component } from 'react';
import '../App.css';


class CheckBoxes extends Component {

 handleClick = () => {
   this.props.func();
 }

  render() {
    return (
      <div className="checkboxes">
            <label className="checkbox-container">True
                <span 
                  className="checkmark" 
                  onClick={!this.props.value? this.handleClick : null} 
                  style={this.props.value? {backgroundColor: `red`} : null}>
                </span>
            </label>
            <label className="checkbox-container">False
                <span 
                  className="checkmark" 
                  onClick={this.props.value? this.handleClick : null} 
                  style={!this.props.value? {backgroundColor: `red`} : null}>
                </span>
            </label>
      </div>
    );
  }
}

export default CheckBoxes;
