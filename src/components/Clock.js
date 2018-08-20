import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    state = {}
    render() { 
        return (
            <div className="container">
                <div className="outer-circle">
                    <div className="inner-circle">
                    </div>
                </div>
          </div>
        );
    }
}
 
export default Clock;