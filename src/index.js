import React from "react"
import Clock from "./clock-components/Clock"

const AnalogClock = (props) => (
  <div>
    <Clock characteristics={props.characteristics} />
  </div>
)

export default AnalogClock
