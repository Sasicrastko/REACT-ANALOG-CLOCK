import React  from 'react';

const romanNumbers = {
    1 : 'I',
    2 : 'II',
    3 : 'III',
    4 : 'IV',
    5 : 'V',
    6 : 'VI',
    7 : 'VII',
    8 : 'VIII',
    9 : 'IX',
    10 : 'X',
    11 : 'XI',
    12 : 'XII'
}

const  Numbers = (props) => {
    
        let arr = []; //fill this array with 12 numbers
        let counter = 12;
        while(counter--){
            arr[counter] = counter + 1;
        }
        return(
            <div className="hour-scale">
                {arr.map((H) =>{
                let rotationAngleForNumberField = props.radialDirectionOfNumbers? `rotate(${90}deg)` : `rotate(${-H*360/12+90}deg)`
                return(
                    <div key={H} className="diameter" style={{transform : `rotate(${H*360/12-90}deg)`, position: `absolute`, top: `45%`, left: `0%`, width: `100%`, height: `10%`}}>
                        <div className="N" style={{transform : rotationAngleForNumberField, position : `absolute`, backgroundColor: `transparent`, top: `0%`, left : `90%`, width : `10%`,  height : `100%`}}>
                            <div className="number" style={{fontSize : `${props.numberSize}%`, color : props.color}}>{props.showRomanNumbers? romanNumbers[H] : H}</div>
                        </div>
                    </div>
                );
                }
            )}
            </div>
        );
}
 
export default Numbers;