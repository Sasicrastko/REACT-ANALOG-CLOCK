import React, { Component } from 'react';
import MinuteScale from './MinuteScale';
import HourScale from './HourScale';
import './Clock.css';

class Clock extends Component {
    state = {
        timer: setInterval(this.setHands.bind(this), 1000),
        hourHandAngle:   -90,
        minuteHandAngle: -90,
        secondHandAngle: -90
    }

    setHands() {
        const d = new Date();
        const sec = d.getSeconds();
        const min = d.getMinutes();
        const hour = d.getHours();
        //console.log(`${hour}:${min}:${sec}`);

        this.setState({
        	secondHandAngle:  (sec*360)/60-90, //-90 because CSS set hands horizontaly when angle is 0deg,
        	minuteHandAngle: (min*360)/60-90,
       	    hourHandAngle: (hour*360)/12+(min*30)/60-90
        });
    }

    render() { 
        return (
            <div className="container">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <MinuteScale/>
                        <HourScale/>
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