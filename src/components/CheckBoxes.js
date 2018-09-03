import React, { Component } from 'react';
import '../App.css';


class CheckBoxes extends Component {
  constructor(props){
    super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
}

 handleClick() {
   this.props.func();
}

  render() {
    return (
      <div className="checkboxes">
            <label className="checkbox-container">True
                <span className="checkmark" onClick={this.handleClick} style={this.props.value? {backgroundColor: `green`} : null}></span>
            </label>
            <label className="checkbox-container">False
                <span className="checkmark" onClick={this.handleClick} style={!this.props.value? {backgroundColor: `green`} : null}></span>
            </label>
      </div>
    );
  }
}

export default CheckBoxes;
