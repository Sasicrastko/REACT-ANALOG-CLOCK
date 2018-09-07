import React, { Component } from 'react';
import '../App.css';


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value : ''
      };
    };
  
    handleChange = (event)=> {
      this.setState({value : event.target.value})
    };
  
    handleSubmit = (event) =>{
      this.props.func(this.state.value);
      this.setState({value : ''})
      event.preventDefault();
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
              type='text' 
              onChange={this.handleChange} 
              value={this.state.value}
              placeholder={this.props.value}
            />
          </label>
        </form>
      );
    };
  }

  export default Form;