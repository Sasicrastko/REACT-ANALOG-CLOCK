import React, {PureComponent} from 'react';

class  MinuteScale extends PureComponent{
    render() {
        return(
            <div className="minute-scale">
                {Array.from(Array(60).keys()).map( S  => {
                    return(
                        <div 
                            key={S} 
                            className="diameter" 
                            style={{transform : `rotate(${S*360/60}deg)`, position : `absolute`, top : `49.5%`, left : '0%', width : `100%`, height : `1%`}}
                        >
                            <div 
                                className="M" 
                                style={{position : `absolute`, backgroundColor: this.props.color, borderRight: `2px solid ${this.props.color}`, top: `0%`, left : `101%`,  width : `3%`, height : `100%`}
                            }>
                            </div>
                        </div>
                    );
                }
            )}
            </div>
        );
    }
};
 
export default MinuteScale;

