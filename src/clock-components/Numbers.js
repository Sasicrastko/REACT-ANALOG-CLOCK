import React  from 'react';


const  numeralsMap  = {
    "western_arabic": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "eastern_arabic": ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢"],
    "roman": ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    "persian": ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۱", "۱۲"],
    "devanagari": ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२"],
    "tamil": ["௧", "௨", "௩", "௪","௫","௬","௭","௮", "௯", "௰", "௰௧", "௰௨"],
    "bengali": ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০", "১১", "১২"],
    "gujarati": ["૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯", "૧૦", "૧૧", "૧૨"],
    "chinese": ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    "korean": ["일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "십", "열하나", "열둘"],
    "hebrew": ["א‎", "ב‎", "ג‎", "ד‎", "ה‎", "ו‎", "ז‎", "ח‎", "ט‎", "י‎", "יא", "יב"]
  }

const  Numbers = (props) => {
    let numerals;
    const  areAllElementsStrings = (arr) => {
        return arr.every(x => (typeof x === "string"));
    };

    if (props.numerals === 'western_arabic') {
        numerals = numeralsMap.western_arabic;
    }
    else if (props.numerals === 'eastern_arabic') {
        numerals = numeralsMap.eastern_arabic;
    }
    else if (props.numerals === 'roman') {
        numerals = numeralsMap.roman;
    }
    else if (props.numerals === 'persian') {
        numerals = numeralsMap.persian;
    }
    else if (props.numerals === 'devanagari') {
        numerals = numeralsMap.devanagari;
    }
    else if (props.numerals === 'tamil') {
        numerals = numeralsMap.tamil;
    }
    else if (props.numerals === 'bengali') {
        numerals = numeralsMap.bengali;
    }
    else if (props.numerals === 'gujarati') {
        numerals = numeralsMap.gujarati;
    }
    else if (props.numerals === 'chinese') {
        numerals = numeralsMap.chinese;
    }
    else if (props.numerals === 'hebrew') {
        numerals = numeralsMap.hebrew;
    }
    else if (props.numerals === 'korean') {
        numerals = numeralsMap.korean;
    }
    else {
        if(Array.isArray(props.numerals) && areAllElementsStrings(props.numerals)) {
            numerals = props.numerals;
        }
        else {
            console.error(`Passed value for numerals should  be from given set or an array of strings.\nOtherwise numerals will be set as "western_arabic".`)
            numerals = numeralsMap.western_arabic;
        }
    }

    return(
        <div className="hour-scale">
            {numeralsMap.western_arabic.map((H) =>{
            let rotationAngleForNumberField = props.radialDirectionOfNumbers? `rotate(${90}deg)` : `rotate(${-H*360/12+90}deg)`
            return(
                <div key={H} className="diameter" style={{transform : `rotate(${H*360/12-90}deg)`, position: `absolute`, top: `45%`, left: `0%`, width: `100%`, height: `10%`}}>
                    <div className="N" style={{transform: rotationAngleForNumberField, position: `absolute`, backgroundColor: `transparent`, top: `0%`, left: `90%`, width: `10%`,  height: `100%`}}>
                        <div className="number" style={{fontSize: `${props.numberSize}%`, color: props.color}}>{numerals[H-1]}</div>
                    </div>
                </div>
            );
            }
        )}
        </div>
    );
}
 
export default Numbers;