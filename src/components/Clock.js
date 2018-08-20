import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    state = {}
    render() { 
        return (
            <div className="container">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <div className="minute-hand">
                        <div className="visible-part-min-hand"></div>
                        </div>
                        <div className="hour-hand">
                        <div className="visible-part-hour-hand"></div>
                        </div>
                        <div className="second-hand">
                        <div className="visible-part-sec-hand"></div>
                        </div>
                        <div className="center-dot"></div>
                    </div>
                </div>
          </div>
        );
    }
}
 
export default Clock;