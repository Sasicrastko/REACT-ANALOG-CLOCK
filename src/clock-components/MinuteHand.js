import React, { PureComponent } from 'react';

class  MinuteHand extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div 
                className="minute-hand" 
                style={{transform : `rotate(${this.props.minuteHandAngle}deg)`}}
            >
                <div 
                    className="visible-part-min-hand" 
                    style={{background: this.props.color}}
                >       
                </div>
            </div>
        )
    }
};
 
export default MinuteHand;