import React, { PureComponent } from "react"

class CenterDot extends PureComponent {
  render() {
    return (
      <div
        className="center-dot"
        style={{ backgroundColor: this.props.color }}
      ></div>
    )
  }
}

export default CenterDot
