import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    state = {
        hourHandAngle: 90,
        minuteHandAngle: 30,
        secondHandAngle: 180
    }

    render() { 
        return (
            <div className="container">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <div className="minute-hand" style={{transform : `rotate(${this.state.minuteHandAngle}deg)`}}>
                        <div className="visible-part-min-hand"></div>
                        </div>
                        <div className="hour-hand" style={{transform : `rotate(${this.state.hourHandAngle}deg)`}}>
                        <div className="visible-part-hour-hand"></div>
                        </div>
                        <div className="second-hand" style={{transform : `rotate(${this.state.secondHandAngle}deg)`}}>
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