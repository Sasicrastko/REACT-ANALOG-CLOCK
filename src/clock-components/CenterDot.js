import React, { memo } from "react"

const CenterDot = (props) => {
  return <div className="center-dot" style={{ backgroundColor: props.color }}></div>
}

export default memo(CenterDot, (props, nextProps) => {
  if (props.color === nextProps.color) {
    return true
  }
})
