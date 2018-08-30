import React, { Component } from 'react';

class  HourHand extends Component {
    render() {
        return(
            <div className="hour-hand" style={{transform : `rotate(${this.props.hourHandAngle}deg)`}}>
                <div className="visible-part-hour-hand" style={{background: this.props.color}}></div>
            </div>
        )
    }
}
 
export default HourHand;