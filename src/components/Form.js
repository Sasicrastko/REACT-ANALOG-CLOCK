import React, { Component } from 'react';
import '../App.css';


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {value : this.props.value};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value : event.target.value})
    }
  
    handleSubmit(event) {
      this.props.func(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.value}/>
          </label>
        </form>
      );
    }
  }

  export default Form;