# react-stop-clock

> A simple customizable stop timer for react app with presist in local storage support.

[![NPM](https://img.shields.io/npm/v/react-stop-clock.svg)](https://www.npmjs.com/package/react-stop-clock) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stop-clock
```

## [Demo](https://riazxrazor.github.io/react-stop-clock/)

## Usage

```jsx
import React, { Component } from 'react'

import ReactStopClock from 'react-stop-clock'

const {
  TimerComponent,
  isTimerActive,
  stopTimer,
  startTimer,
  getCurrentTimeInSeconds
} = new ReactStopClock({
  id: 1,
  presist: true,
  onTick: (e) => {
    console.log(e)
  }
})

class Example extends Component {
  render() {
    return (
      <TimerComponent
        labels={{
          minutes: 'min'
        }}
      />
    )
  }
}
```

`ReactStopClock` is a factory class few options can be passed

```
 default options
 {
   id: 1,  // id of the timer if u have multiple this should be different
   onTick: null,  // callback called on each tick second
   presist: false, // weather the timer is presist or not keeps ticking on page refresh.
   key: 'react-stop-clock', // localstorage key to use in presistance mode
   presistanceType: window.localStorage // default presistance type to localstorage
 }
```

### TimerComponent

`labes` props can be passsed as object to over write the display name

```
days: ""
hours: ""
minutes: ""
months: ""
seconds: ""
years: ""
```

### methods returned by the factory object `ReactStopClock`

- `isTimerActive` is the timer running or not
- `stopTimer` stops the timer
- `startTimer` starts the timer if stopped
- `getCurrentTimeInSeconds` gets the seconds ellapsed sice its started.

## License

MIT © [riazXrazor](https://github.com/riazXrazor)
