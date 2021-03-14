import React, { useState, useEffect, memo } from "react"
import MinuteScale from "./MinuteScale"
import HourScale from "./HourScale"
import MinuteHand from "./MinuteHand"
import HourHand from "./HourHand"
import Numbers from "./Numbers"
import SecondHand from "./SecondHand"
import "./Clock.css"
import CenterDot from "./CenterDot"
import defaultCharacteristics from "../defaultCharacteristics"

const Clock = (props) => {
  const [date, setDate] = useState(new Date())
  const characteristics = Object.assign(
    defaultCharacteristics,
    props.characteristics
  )

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(timer)
    }
  })

  const calculateHandAngles = (date, iana) => {
    let ianaDate
    try {
      ianaDate = new Date(
        date.toLocaleString("en-US", {
          timeZone: iana,
        })
      )
    } catch (error) {
      if (iana !== "" && iana !== undefined && iana !== null) {
        console.error(
          `react-ras-component:\n accepted "${iana}" for "iana". This is wrong IANA value\nso the time zone was set to local time.\nLook for available IANA values here:`,
          "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
        )
      }
      ianaDate = new Date()
    }
    const sec = ianaDate.getSeconds()
    const min = ianaDate.getMinutes()
    const hour = ianaDate.getHours()

    return {
      secondHandAngle: (sec * 360) / 60 - 90, // -90 because CSS set hands horizontaly when angle is 0deg,
      minuteHandAngle: (min * 360) / 60 - 90,
      hourHandAngle: (hour * 360) / 12 + (min * 30) / 60 - 90,
    }
  }

  const { secondHandAngle, minuteHandAngle, hourHandAngle } = calculateHandAngles(
    date,
    props.characteristics.iana
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
                <MinuteScale color={characteristics.colorOfScalesAndNumbers} />
              )}
              {characteristics.showHourScale && (
                <HourScale color={characteristics.colorOfScalesAndNumbers} />
              )}
              {characteristics.showNumbers && (
                <Numbers
                  numerals={characteristics.numerals}
                  numberSize={characteristics.numberSize}
                  radialDirectionOfNumbers={characteristics.radialDirectionOfNumbers}
                  color={characteristics.colorOfScalesAndNumbers}
                />
              )}
              <MinuteHand
                minuteHandAngle={minuteHandAngle}
                color={characteristics.minuteHandColor}
              />
              <HourHand
                hourHandAngle={hourHandAngle}
                color={characteristics.hourHandColor}
              />
              <SecondHand
                secondHandAngle={secondHandAngle}
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

export default Clock
