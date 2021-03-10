import React from "react"
import numeralsMap from "../numeralsMap"

const Numbers = (props) => {
  let numerals
  const areAllElementsStrings = (arr) => arr.every((x) => typeof x === "string")

  if (props.numerals === "western_arabic") {
    numerals = numeralsMap.western_arabic
  } else if (props.numerals === "eastern_arabic") {
    numerals = numeralsMap.eastern_arabic
  } else if (props.numerals === "roman") {
    numerals = numeralsMap.roman
  } else if (props.numerals === "persian") {
    numerals = numeralsMap.persian
  } else if (props.numerals === "devanagari") {
    numerals = numeralsMap.devanagari
  } else if (props.numerals === "tamil") {
    numerals = numeralsMap.tamil
  } else if (props.numerals === "bengali") {
    numerals = numeralsMap.bengali
  } else if (props.numerals === "gujarati") {
    numerals = numeralsMap.gujarati
  } else if (props.numerals === "chinese") {
    numerals = numeralsMap.chinese
  } else if (props.numerals === "hebrew") {
    numerals = numeralsMap.hebrew
  } else if (props.numerals === "korean") {
    numerals = numeralsMap.korean
  } else if (
    Array.isArray(props.numerals) &&
    areAllElementsStrings(props.numerals)
  ) {
    numerals = props.numerals
  } else {
    console.error(
      `ract-ras-component:\nPassed value for numerals should  be from given set or an array of strings.\nOtherwise numerals will be set as "western_arabic".\nhttps://www.npmjs.com/package/ras-react-component`
    )
    numerals = numeralsMap.western_arabic
  }
  return (
    <div className="hour-scale">
      {numeralsMap.western_arabic.map((H) => {
        const rotationAngleForNumberField = props.radialDirectionOfNumbers
          ? `rotate(${90}deg)`
          : `rotate(${(-H * 360) / 12 + 90}deg)`
        return (
          <div
            key={H}
            className="diameter"
            style={{
              transform: `rotate(${(H * 360) / 12 - 90}deg)`,
              position: `absolute`,
              top: `45%`,
              left: `0%`,
              width: `100%`,
              height: `10%`,
            }}
          >
            <div
              className="N"
              style={{
                transform: rotationAngleForNumberField,
                position: `absolute`,
                backgroundColor: `transparent`,
                top: `0%`,
                left: `90%`,
                width: `10%`,
                height: `100%`,
              }}
            >
              <div
                className="number"
                style={{
                  fontSize: `${props.numberSize}%`,
                  color: props.color,
                }}
              >
                {numerals[H - 1]}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Numbers
