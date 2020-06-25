import React from 'react'

import CountdownTimer from 'react-stop-clock'
import 'react-stop-clock/dist/index.css'

const {
  TimerComponent,
  isTimerActive,
  stopTimer,
  startTimer,
  resetTimer,
  getCurrentTimeInSeconds
} = new CountdownTimer({
  id: 1,
  // presist: true,
  onTick: (e) => {
    //console.log(e)
  }
})

const App = () => {
  const [value, setValue] = React.useState(0)

  return (
    <>
      <TimerComponent
        labels={{
          minutes: 'min',
          seconds: 'sec'
        }}
      />
      <div>{value}</div>
      <div>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={() => setValue(getCurrentTimeInSeconds())}>
          get seconds
        </button>
      </div>
    </>
  )
}

export default App
