import React, { Component } from 'react';

class  HourScale extends Component {
    state = {  }
    render() {
        var arr = []; //fill this array with 12 numbers
        var counter = 12;
        while(counter--){
            arr[counter] = counter+1;
        }
        return(
            <div className="hour-scale">
                {arr.map((H) =>{
                return(
                    <div className="diameter" style={{transform : `rotate(${H*360/12}deg)`, position: `absolute`, top: `48.5%`, left: `0%`, width: `100%`, height: `3%`}}>
                        <div className="H" style={{position : `absolute`, backgroundColor: `black`, top: `0%`, left : `95%`, width : `5%`,  height : `100%`}}>
                        </div>
                    </div>
                );
                }
            )}
            </div>
        );
    }
}
 
export default HourScale;
