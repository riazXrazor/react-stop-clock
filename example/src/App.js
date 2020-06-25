import React from 'react'

import CountdownTimer from 'react-stop-clock'
import 'react-stop-clock/dist/index.css'

const {
  TimerComponent,
  isTimerActive,
  stopTimer,
  startTimer,
  getCurrentTimeInSeconds
} = new CountdownTimer({
  id: 1,
  presist: true,
  onTick: (e) => {
    console.log(e)
  }
})

const App = () => {
  return (
    <TimerComponent
      labels={{
        minutes: 'min',
        seconds: 's'
      }}
    />
  )
}

export default App
