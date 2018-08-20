import React, { Component } from 'react';
import MinuteScale from './MinuteScale'
import './Clock.css';

class Clock extends Component {
    state = {
        timer: setInterval(this.setHands.bind(this), 1000),
        hourHandAngle:   -90,
        minuteHandAngle: -90,
        secondHandAngle: -90
    }

    componentDidMount(){
        //this.createMinuteScale();
        //this.createHourScale();
    }



     createMinuteScale(){
        var innerCircle = document.getElementsByClassName("inner-circle")[0];
        for(let i = 0; i<60; i++){
            var diameter = document.createElement("div");
            var M = document.createElement("div");
            diameter.setAttribute("style", "position: absolute; top: 49.5%; left: 0%; width: 100%; height: 1%;");
            M.setAttribute("style", "position:absolute;background-color: black; top: 0%; left:97%; width:3%; height:100%;");
            diameter.style.transform = `rotate(${i*360/60}deg)`;
            diameter.appendChild(M);
            innerCircle.appendChild(diameter);
          }
    } 

    createHourScale(){
        var innerCircle = document.getElementsByClassName("inner-circle")[0];
        for(let i = 0; i<12; i++){
            var diameter = document.createElement("div");
            var H = document.createElement("div");
            diameter.setAttribute("style", "position: absolute; top: 48.5%; left: 0%; width: 100%; height: 3%;");
            H.setAttribute("style", "position:absolute;background-color: black; top: 0%; left:95%; width:5%; height:100%;");
            diameter.style.transform = `rotate(${i*360/12}deg)`;
            diameter.appendChild(H);
            innerCircle.appendChild(diameter);
          }
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