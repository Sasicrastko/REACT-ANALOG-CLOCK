import React, {PureComponent} from 'react';

class  HourScale {
render() {
    return(
        <div className="hour-scale">
            {Array.from(Array(12).keys()).map( H => {
            return(
                <div key={H} className="diameter" style={{transform : `rotate(${H*360/12}deg)`, position: `absolute`, top: `48.5%`, left: `0%`, width: `100%`, height: `3%`}}>
                    <div className="H" style={{position : `absolute`, backgroundColor: props.color, top: `0%`, left : `100%`, width : `4%`,  borderRight: `2px solid ${props.color}`, height : `100%`}}>
                    </div>
                </div>
            )}
        )}
        </div>
    );
}
};
 
export default HourScale;
