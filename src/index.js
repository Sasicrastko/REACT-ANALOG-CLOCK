import React, { Component } from 'react';
import Clock from './clock-components/Clock';

class AnalogClock extends Component {
    render() {
        console.log("aaa:", this.props);
        return (
        <div>
            <Clock characteristics={this.props.characteristics}/>
        </div>
        );
    }
}

export default AnalogClock;
