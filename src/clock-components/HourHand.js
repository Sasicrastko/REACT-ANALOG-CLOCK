import React, { PureComponent } from 'react';


class  HourHand extends PureComponent  {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div 
                className="hour-hand" 
                style={{transform : `rotate(${this.props.hourHandAngle}deg)`}}
            >
                <div 
                    className="visible-part-hour-hand" 
                    style={{background: this.props.color}}
                >
                </div>
            </div>
        )
    }
}
 
export default HourHand;