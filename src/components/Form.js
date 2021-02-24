import React from 'react';
import '../App.css';
import { defaultJSON }  from "../defaultValues";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultJSON,
      errorInJSON: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const object = this.state.value;
    if(this.isValidJSON(object)) {
        this.props.setCharacteristics(JSON.parse(this.state.value));
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.state.errorInJSON && <p>{this.state.errorInJSON}</p>}
      </div>
    );
  }
}

export default Form;