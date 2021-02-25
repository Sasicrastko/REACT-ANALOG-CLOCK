import React, { Component } from 'react';
import Clock from './clock-components/Clock';

class AnalogClock extends Component {
    render() {
        return (
        <div>
            <Clock characteristics={this.props.style}/>
        </div>
        );
    }
}

export default AnalogClock;
