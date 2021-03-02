import React, { PureComponent } from "react"

class HourScale extends PureComponent {
  render() {
    return (
      <div className="hour-scale">
        {Array.from(Array(12).keys()).map((H) => (
          <div
            key={H}
            className="diameter"
            style={{
              transform: `rotate(${(H * 360) / 12}deg)`,
              position: `absolute`,
              top: `48.5%`,
              left: `0%`,
              width: `100%`,
              height: `3%`,
            }}
          >
            <div
              className="H"
              style={{
                position: `absolute`,
                backgroundColor: this.props.color,
                top: `0%`,
                left: `100%`,
                width: `4%`,
                borderRight: `2px solid ${this.props.color}`,
                height: `100%`,
              }}
            ></div>
          </div>
        ))}
      </div>
    )
  }
}

export default HourScale
