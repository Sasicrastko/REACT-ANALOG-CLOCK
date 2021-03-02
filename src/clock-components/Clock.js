import React, { PureComponent } from 'react'
import MinuteScale from './MinuteScale'
import HourScale from './HourScale'
import MinuteHand from './MinuteHand'
import HourHand from './HourHand'
import Numbers from './Numbers'
import SecondHand from './SecondHand'
import './Clock.css'
import CenterDot from './CenterDot'
import defaultCharacteristics from '../defaultCharacteristics'

class Clock extends PureComponent {
  constructor(props) {
    super(props)
    this.state = this.calculateHandAngles()
    this.timer = null
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setHandAngles(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  calculateHandAngles() {
    const d = this.getDate(this.props.characteristics.iana)

    const sec = d.getSeconds()
    const min = d.getMinutes()
    const hour = d.getHours()

    return {
      secondHandAngle: (sec * 360) / 60 - 90, // -90 because CSS set hands horizontaly when angle is 0deg,
      minuteHandAngle: (min * 360) / 60 - 90,
      hourHandAngle: (hour * 360) / 12 + (min * 30) / 60 - 90,
    }
  }

  setHandAngles() {
    const angles = this.calculateHandAngles()
    this.setState(angles)
  }

  // the browsers cannot read IANA timezones when creating a date,
  // nor have  methods to change the timezones on  existing Date object

  getDate(iana) {
    const date = new Date()
    try {
      return new Date(
        date.toLocaleString('en-US', {
          timeZone: iana,
        }),
      )
    } catch (error) {
      if (iana !== '' && iana !== undefined && iana !== null) {
        console.error(
          `react-ras-component:\n accepted "${iana}" for "iana". This is wrong IANA value\nso the time zone was set to local time.\nLook for available IANA values here:`,
          'https://en.wikipedia.org/wiki/List_of_tz_database_time_zones',
        )
      }
      return new Date()
    }
  }

  render() {
    const characteristics = Object.assign(
      defaultCharacteristics,
      this.props.characteristics,
    )
    return (
      <div
        className="container"
        style={{
          width: Number(characteristics.width),
          height: Number(characteristics.width),
        }}
      >
        <div
          className="outer-circle"
          style={{
            backgroundColor: characteristics.fourthCircleColor,
          }}
        >
          <div
            className="inner-circle1"
            style={{
              backgroundColor: characteristics.thirdCircleColor,
            }}
          >
            <div
              className="inner-circle2"
              style={{
                backgroundColor: characteristics.secondCircleColor,
              }}
            >
              <div
                className="inner-circle3"
                style={{
                  backgroundColor: characteristics.firstCircleColor,
                }}
              >
                {characteristics.showMinuteScale && (
                  <MinuteScale
                    color={characteristics.colorOfScalesAndNumbers}
                  />
                )}
                {characteristics.showHourScale && (
                  <HourScale color={characteristics.colorOfScalesAndNumbers} />
                )}
                {characteristics.showNumbers && (
                  <Numbers
                    numerals={characteristics.numerals}
                    numberSize={characteristics.numberSize}
                    radialDirectionOfNumbers={
                      characteristics.radialDirectionOfNumbers
                    }
                    color={characteristics.colorOfScalesAndNumbers}
                  />
                )}
                <MinuteHand
                  minuteHandAngle={this.state.minuteHandAngle}
                  color={characteristics.minuteHandColor}
                />
                <HourHand
                  hourHandAngle={this.state.hourHandAngle}
                  color={characteristics.hourHandColor}
                />
                <SecondHand
                  secondHandAngle={this.state.secondHandAngle}
                  color={characteristics.secondHandColor}
                />
                <CenterDot color={characteristics.centerDotColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock
