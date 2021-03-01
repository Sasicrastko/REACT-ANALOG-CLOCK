import React from 'react';

const  SecondHand = (props) => {
    return(
        <div 
            className="second-hand" 
            style={{transform : `rotate(${props.secondHandAngle}deg)`}}
        >
            <div 
                className="visible-part-sec-hand" 
                style={{background: props.color}}
            >     
            </div>
        </div>
    )
};
 
export default SecondHand;