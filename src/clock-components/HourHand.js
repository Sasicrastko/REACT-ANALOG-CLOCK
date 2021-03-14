import React, { memo } from "react"

const HourHand = (props) => {
  return (
    <div
      className="hour-hand"
      style={{ transform: `rotate(${props.hourHandAngle}deg)` }}
    >
      <div
        className="visible-part-hour-hand"
        style={{ background: props.color }}
      ></div>
    </div>
  )
}

export default memo(HourHand, (props, nextProps) => {
  if (props.hourHandAngle === nextProps.hourHandAngle) {
    return true
  }
})
