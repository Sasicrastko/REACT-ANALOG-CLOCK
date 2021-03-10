import React, { memo } from "react"

const MinuteHand = (props) => {
  return (
    <div
      className="minute-hand"
      style={{ transform: `rotate(${props.minuteHandAngle}deg)` }}
    >
      <div
        className="visible-part-min-hand"
        style={{ background: props.color }}
      ></div>
    </div>
  )
}

export default memo(MinuteHand, (props, nextProps) => {
  if (props.minuteHandAngle === nextProps.minuteHandAngle) {
    return true
  }
})
