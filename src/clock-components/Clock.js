import React, { Component } from 'react';
import MinuteScale from './MinuteScale';
import HourScale from './HourScale';
import MinuteHand from './MinuteHand';
import HourHand from './HourHand';
import Numbers from './Numbers';
import SecondHand from './SecondHand';
import './Clock.css';

class Clock extends Component {
    state = {
        timer: setInterval(this.setHandAngles.bind(this), 1000),
    }

    componentWillMount(){
        this.setHandAngles(); //this will set hands to accurate position before the page is loaded
    }

    setHandAngles(){
        const date = new Date();
        const d = this.props.characteristics.iana ? this.changeTimezone(date, this.props.characteristics.iana) : date;

        const sec = d.getSeconds();
        const min = d.getMinutes();
        const hour = d.getHours();
        this.setState({
        	secondHandAngle:  (sec*360)/60-90, //-90 because CSS set hands horizontaly when angle is 0deg,
        	minuteHandAngle: (min*360)/60-90,
       	    hourHandAngle: (hour*360)/12+(min*30)/60-90
        });
    }

    //the browsers cannot read IANA timezones when creating a date,
    //nor have  methods to change the timezones on  existing Date object
    //so we need a method changeTimezone to handle that

   changeTimezone(date,iana) {
        let date2 = new Date(date.toLocaleString('en-US', { 
           timeZone: iana 
        }));
        var difference = date.getTime()-date2.getTime();
        return new Date(date.getTime()-difference);
    }

    render() {
        let colorOfOuterRing = this.props.characteristics.showOuterRing? this.props.characteristics.innerCircleColor : `transparent`; 
        let colorOfInnerRing = this.props.characteristics.showInnerRing? this.props.characteristics.innerCircleColor : `transparent`; 
        return (
            <div className="container" style={{width: Number(this.props.characteristics.width), height: Number(this.props.characteristics.width)}}>
                <div className="outer-circle" style={{backgroundColor: `${colorOfOuterRing}`}}>
                    <div className="inner-circle" style={{backgroundColor: this.props.characteristics.innerCircleColor}}>
                            <div className="inner-circle2" style={{backgroundColor: `${colorOfInnerRing}`}}>
                                <div className="inner-circle3" style={{backgroundColor: this.props.characteristics.innerCircleColor}} >
                                    {this.props.characteristics.showMinuteScale?
                                        <MinuteScale color={this.props.characteristics.colorOfScalesAndNumbers}/> 
                                        : 
                                        null
                                    }
                                    {this.props.characteristics.showHourScale? 
                                        <HourScale color={this.props.characteristics.colorOfScalesAndNumbers}/> 
                                        : 
                                        null
                                    }
                                    {this.props.characteristics.showNumbers? 
                                        <Numbers 
                                            showRomanNumbers={this.props.characteristics.showRomanNumbers} 
                                            numberSize={this.props.characteristics.numberSize} 
                                            radialDirectionOfNumbers={this.props.characteristics.radialDirectionOfNumbers} 
                                            color={this.props.characteristics.colorOfScalesAndNumbers}
                                        /> 
                                        : 
                                        null
                                    }
                                    <MinuteHand minuteHandAngle={this.state.minuteHandAngle} color={this.props.characteristics.minuteHandColor}/>
                                    <HourHand hourHandAngle={this.state.hourHandAngle} color={this.props.characteristics.hourHandColor}/>
                                    <SecondHand secondHandAngle={this.state.secondHandAngle} color={this.props.characteristics.secondHandColor}/>
                                    <div className="center-dot" style={{backgroundColor: this.props.characteristics.centerDotColor}}></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Clock;