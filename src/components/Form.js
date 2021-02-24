import React from 'react';
import '../App.css';
import { defaultJSON }  from "../defaultValues";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultJSON,
      lastValidValue: defaultJSON,
      errorInJSON: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.value;
    try {
      this.prettify(value);
    }
    catch(e) {

    }
    if(this.isValidJSON(value)) {
        this.setState({lastValidValue: value}, () => {
          this.props.setCharacteristics(JSON.parse(value));
        });
    }
  }

  isValidJSON (string) {
    try {
       this.setState({errorInJSON: null });
        return JSON.parse(string);
    } catch (e) {
       this.setState({errorInJSON: e.message }, () => {
        return false;
       }) 
    }
  }

  prettify (value) {
    var obj = JSON.parse(value);
    const pretty = JSON.stringify(obj, undefined, 2);
    this.setState({value: pretty});
  }

  reset() {
    this.setState({
      value: this.state.lastValidValue,
      errorInJSON: null
    });
  }

  render() {
    return (
      <div className="left-side">
        <div className="form">
          <label 
            className={this.state.errorInJSON  ? "error-message": "label"}
          >
            {this.state.errorInJSON  ? `Error: ${this.state.errorInJSON}!` : "Enter the watch characteristics in JSON format!"}
          </label>
          <form 
            onSubmit={this.state.errorInJSON ? this.reset : this.handleSubmit}
          >
            <textarea value={this.state.value} onChange={this.handleChange} spellCheck="false"/>
            <button type="submit">{this.state.errorInJSON ?  "RESET" : "SUBMIT"}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;