import React, { Component } from 'react';

class  SecondHand extends Component {
    render() {
        return(
            <div className="second-hand" style={{transform : `rotate(${this.props.secondHandAngle}deg)`}}>
                <div className="visible-part-sec-hand"></div>
            </div>
        )
    }
}
 
export default SecondHand;