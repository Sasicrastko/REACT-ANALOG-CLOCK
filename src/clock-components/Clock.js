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
        /*hourHandAngle:   0, 
        minuteHandAngle: 0,
        secondHandAngle: 0,
        showRomanNumbers: this.props.characteristics.showRomanNumbers,
        showMinuteScale: this.props.characteristics.showMinuteScale,
        showHourScale: this.props.characteristics.showHourScale,
        showNumbers: this.props.characteristics.showNumbers,
        radialDirectionOfNumbers: this.props.characteristics.radialDirectionOfNumbers,
        showOuterRing: this.props.characteristics.showOuterRing,
        showInnerRing: this.props.characteristics.showInnerRing,
        colorOfScalesAndNumbers: this.props.characteristics.colorOfScalesAndNumbers,
        hourHandColor: this.props.characteristics.hourHandColor,
        minuteHandColor: this.props.characteristics.minuteHandColor,
        secondHandColor: this.props.characteristics.secondHandColor,
        innerCircleColor: this.props.characteristics.innerCircleColor,
        centerDotColor: this.props.characteristics.centerDotColor,
        width: this.props.characteristics.width,
        numberSize: this.props.characteristics.numberSize */
    }

    componentWillMount(){
        this.setHandAngles(); //this will set hands on accurate position before the page is loaded
    }

    setHandAngles(){
        const d = new Date();
        const sec = d.getSeconds();
        const min = d.getMinutes();
        const hour = d.getHours();
        this.setState({
        	secondHandAngle:  (sec*360)/60-90, //-90 because CSS set hands horizontaly when angle is 0deg,
        	minuteHandAngle: (min*360)/60-90,
       	    hourHandAngle: (hour*360)/12+(min*30)/60-90
        });
    }

    render() {
        //console.log(this.props);
        var colorOfOuterRing = this.props.characteristics.showOuterRing? this.props.characteristics.colorOfScalesAndNumbers : `transparent`; 
        var colorOfInnerRing = this.props.characteristics.showInnerRing? this.props.characteristics.colorOfScalesAndNumbers : `transparent`; 
        return (
            <div className="container" style={{width: Number(this.props.characteristics.width), height: Number(this.props.characteristics.width)}}>
                <div className="outer-circle" style={{backgroundColor: `${colorOfOuterRing}`}}>
                    <div className="inner-circle" style={{backgroundColor: this.props.characteristics.innerCircleColor}}>
                            <div className="inner-circle2" style={{backgroundColor: `${colorOfInnerRing}`}}>
                                <div className="inner-circle3" style={{backgroundColor: this.props.characteristics.innerCircleColor}} >
                                    {this.props.characteristics.showMinuteScale?
                                        <MinuteScale color={this.props.characteristics.colorOfScalesAndNumbers}/> : null}
                                    {this.props.characteristics.showHourScale? 
                                        <HourScale color={this.props.characteristics.colorOfScalesAndNumbers}/> : null}
                                    {this.props.characteristics.showNumbers? 
                                        <Numbers showRomanNumbers={this.props.characteristics.showRomanNumbers} numberSize={this.props.characteristics.numberSize} radialDirectionOfNumbers={this.props.characteristics.radialDirectionOfNumbers} color={this.props.characteristics.colorOfScalesAndNumbers}/> : null}
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