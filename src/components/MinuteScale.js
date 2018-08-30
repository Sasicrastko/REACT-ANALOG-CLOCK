import React, { Component } from 'react';

class  MinuteScale extends Component {
    state = {  }
    render() {
        var arr = []; //fill this array with 60 numbers
        var counter = 60;
        while(counter--){
            arr[counter] = counter+1;
        }
        return(
            <div className="minute-scale">
                {arr.map((S) =>{
                return(
                    <div className="diameter" style={{transform : `rotate(${S*360/60}deg)`, position : `absolute`, top : `49.5%`, left : '0%;', width : `100%`, height : `1%`}}>
                        <div className="M" style={{position : `absolute`, backgroundColor: this.props.color, top: `0%`, left : `101%`,  width : `4%`, height : `100%`}}>
                        </div>
                    </div>
                );
                }
            )}
            </div>
        );
    }
}
 
export default MinuteScale;

