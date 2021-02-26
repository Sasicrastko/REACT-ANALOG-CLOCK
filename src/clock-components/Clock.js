import React, { Component } from 'react';
import MinuteScale from './MinuteScale';
import HourScale from './HourScale';
import MinuteHand from './MinuteHand';
import HourHand from './HourHand';
import Numbers from './Numbers';
import SecondHand from './SecondHand';
import './Clock.css';
import CenterDot from './CenterDot';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = this.calculateHandAngles();
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(
          () => this.setHandAngles(),
          1000
        );
    };
    
    componentWillUnmount() {
        clearInterval(this.timer);
    };

    calculateHandAngles () {
        const d = this.getDate(this.props.characteristics.iana);

        const sec = d.getSeconds();
        const min = d.getMinutes();
        const hour = d.getHours();

        return {
        	secondHandAngle:  (sec*360)/60-90, // -90 because CSS set hands horizontaly when angle is 0deg,
        	minuteHandAngle: (min*360)/60-90,
       	    hourHandAngle: (hour*360)/12+(min*30)/60-90
        };
    };

    setHandAngles() {
        const angles = this.calculateHandAngles();
        this.setState(angles);
    };

    // the browsers cannot read IANA timezones when creating a date,
    // nor have  methods to change the timezones on  existing Date object

   getDate(iana) {
    const date = new Date();
        try {
            return new Date(date.toLocaleString('en-US', { 
                timeZone: iana 
             }));       
        } catch (error) {
            if(iana!=="" && iana!==undefined  && iana!==null ) {
            console.error (
                `react-ras-component:\n accepted "${iana}" for "iana". This is wrong IANA value\nso the time zone was set to local time.\nLook for available IANA values here:`, 
                 "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones");
            }
            return new Date();   
        }
    };

    render() {
        return (
            <div className="container" style={{width: Number(this.props.characteristics.width), height: Number(this.props.characteristics.width)}}>
                <div className="outer-circle" style={{backgroundColor: this.props.characteristics.fourthCircleColor}}>
                    <div className="inner-circle1" style={{backgroundColor: this.props.characteristics.thirdCircleColor}}>
                            <div className="inner-circle2" style={{backgroundColor: this.props.characteristics.secondCircleColor}}>
                                <div className="inner-circle3" style={{backgroundColor: this.props.characteristics.firstCircleColor}} >
                                    {this.props.characteristics.showMinuteScale && 
                                    <MinuteScale 
                                        color={this.props.characteristics.colorOfScalesAndNumbers}
                                    />
                                    }
                                    {this.props.characteristics.showHourScale && 
                                    <HourScale 
                                        color={this.props.characteristics.colorOfScalesAndNumbers}
                                    /> 
                                    }
                                    {this.props.characteristics.showNumbers &&
                                    <Numbers 
                                        numerals={this.props.characteristics.numerals} 
                                        numberSize={this.props.characteristics.numberSize} 
                                        radialDirectionOfNumbers={this.props.characteristics.radialDirectionOfNumbers} 
                                        color={this.props.characteristics.colorOfScalesAndNumbers}
                                    /> 
                                    }
                                    <MinuteHand 
                                        minuteHandAngle={this.state.minuteHandAngle} 
                                        color={this.props.characteristics.minuteHandColor}
                                    />
                                    <HourHand 
                                        hourHandAngle={this.state.hourHandAngle} 
                                        color={this.props.characteristics.hourHandColor}
                                    />
                                    <SecondHand 
                                        secondHandAngle={this.state.secondHandAngle} 
                                        color={this.props.characteristics.secondHandColor}
                                    />
                                    <CenterDot color={this.props.characteristics.centerDotColor}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

Clock.defaultProps = {
    characteristics:   { 
        showRomanNumbers: false,
        showMinuteScale: true,
        showHourScale: true,
        showNumbers: true,
        radialDirectionOfNumbers: false,
        showOuterRing: true,
        showInnerRing: true,
        colorOfScalesAndNumbers: `black`,
        hourHandColor: `#151515`,
        minuteHandColor: `black`,
        secondHandColor: `red`,
        firstCircleColor: `white`,
        secondCircleColor: `white`,
        thirdCircleColor: `white`,
        fourthCircleColor: `black`,
        centerDotColor: `black`,
        width: 300,
        numberSize: 150,
        iana: `Europe/London`
    }
}
 
export default Clock;