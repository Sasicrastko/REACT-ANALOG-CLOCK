import React, { Component } from 'react';

class  MinuteHand extends Component {
    render() {
        return(
            <div className="minute-hand" style={{transform : `rotate(${this.props.minuteHandAngle}deg)`}}>
                <div className="visible-part-min-hand"></div>
            </div>
            )

    }
}
 
export default MinuteHand;