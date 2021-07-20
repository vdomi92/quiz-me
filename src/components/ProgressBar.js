import React from 'react'
import { useState, useEffect } from 'react'

const ProgressBar = (props) => {
  const [timerWidth, setTimerWidth] = useState(0)

  const myInterval = () =>
    setInterval(() => {
      setTimerWidth(timerWidth + 1)
    }, 200)

  const timerHandler = () => {
    if (props.answer === null) {
      myInterval()
    } else {
      return clearInterval(myInterval)
    }
  }

  useEffect(() => {
    timerHandler()
    return () => clearInterval(myInterval)
  }, [props.isDisabled])

  return (
    <div className='timer-Bar'>
      <div
        className='timer-Progress'
        style={{ width: timerWidth.toString() + '%' }}
      ></div>
    </div>
  )
}

export default ProgressBar
