import React, { memo } from "react"

const CenterDot = (props) => {
  return <div className="center-dot" style={{ backgroundColor: props.color }}></div>
}

export default memo(CenterDot, () => true)
