import React, { PureComponent } from 'react'
import numeralsMap from '../numeralsMap'

const numbersStyleDefault = {
  width: `100%`,
  height: `100%`,
  fontWeight: `100`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  fontFamily: `Times`,
}

class Numbers extends PureComponent {
  render() {
    console.log(this.props)
    // let style = Object.assign(numbersStyleDefault, props.numbersStyle )
    let numerals
    const areAllElementsStrings = (arr) =>
      arr.every((x) => typeof x === 'string')

    if (this.props.numerals === 'western_arabic') {
      numerals = numeralsMap.western_arabic
    } else if (this.props.numerals === 'eastern_arabic') {
      numerals = numeralsMap.eastern_arabic
    } else if (this.props.numerals === 'roman') {
      numerals = numeralsMap.roman
    } else if (this.props.numerals === 'persian') {
      numerals = numeralsMap.persian
    } else if (this.props.numerals === 'devanagari') {
      numerals = numeralsMap.devanagari
    } else if (this.props.numerals === 'tamil') {
      numerals = numeralsMap.tamil
    } else if (this.props.numerals === 'bengali') {
      numerals = numeralsMap.bengali
    } else if (this.props.numerals === 'gujarati') {
      numerals = numeralsMap.gujarati
    } else if (this.props.numerals === 'chinese') {
      numerals = numeralsMap.chinese
    } else if (this.props.numerals === 'hebrew') {
      numerals = numeralsMap.hebrew
    } else if (this.props.numerals === 'korean') {
      numerals = numeralsMap.korean
    } else if (
      Array.isArray(this.props.numerals) &&
      areAllElementsStrings(this.props.numerals)
    ) {
      numerals = this.props.numerals
    } else {
      console.error(
        `ract-ras-component:\nPassed value for numerals should  be from given set or an array of strings.\nOtherwise numerals will be set as "western_arabic".\nhttps://www.npmjs.com/package/ras-react-component`,
      )
      numerals = numeralsMap.western_arabic
    }
    return (
      <div className="hour-scale">
        {numeralsMap.western_arabic.map((H) => {
          const rotationAngleForNumberField = this.props
            .radialDirectionOfNumbers
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
                    fontSize: `${this.props.numberSize}%`,
                    color: this.props.color,
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
}

export default Numbers
