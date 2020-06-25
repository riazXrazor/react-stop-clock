/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import intervalToDuration from 'date-fns/intervalToDuration'
import parseJSON from 'date-fns/parseJSON'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import map from 'lodash/map'

let defaultOptions = {
  id: 1,
  onTick: null,
  presist: false,
  key: 'react-stop-clock',
  presistanceType: window.localStorage
}
class ReactStopClock {
  constructor(options) {
    defaultOptions = { ...defaultOptions, ...options }
    this.id = defaultOptions.id
    this.onTick = defaultOptions.onTick
    this.presist = defaultOptions.presist
    this.key = defaultOptions.key
    this.presistanceType = defaultOptions.presistanceType
  }

  TimerComponent = (props) => {
    const [start] = useState(() => {
      let t = new Date()
      if (this.presist) {
        const d = this.presistanceType.getItem(`${this.key}-${this.id}`)
        if (d) {
          t = parseJSON(d)
        } else {
          this.presistanceType.setItem(
            `${this.key}-${this.id}`,
            t.toISOString()
          )
        }
      }
      console.log(t)
      return t
    })
    const [duration, setDuration] = useState({})
    useEffect(() => {
      const timer = setInterval(
        () =>
          setDuration(() => {
            const d = intervalToDuration({
              start,
              end: new Date()
            })
            if (this.onTick) {
              this.onTick(d)
            }
            return d
          }),
        1000
      )
      return () => {
        clearInterval(timer)
      }
    }, [])

    return (
      <div className='react-stop-clock-container'>
        {map(duration, (val, key) => {
          return val ? (
            <span
              className={`react-stop-clock-time-${key}`}
              key={`${this.key}-${val}${key}`}
              style={{ margin: '3px' }}
            >
              {val}{' '}
              <small className={`react-stop-clock-${key}`}>
                {props.labels && props.labels[key] ? props.labels[key] : key}
              </small>
            </span>
          ) : null
        })}
      </div>
    )
  }

  isTimerActive = () => !!this.presistanceType.getItem(`${this.key}-${this.id}`)

  stopTimer = () => this.presistanceType.removeItem(`${this.key}-${this.id}`)

  startTimer = () =>
    this.presistanceType.setItem(
      `${this.key}-${this.id}`,
      new Date().toISOString()
    )

  resetTimer = () =>
    this.presistanceType.setItem(
      `${this.key}-${this.id}`,
      new Date().toISOString()
    )

  getCurrentTimeInSeconds = () => {
    try {
      const time = parseJSON(
        this.presistanceType.getItem(`${this.key}-${this.id}`)
      )
      return differenceInSeconds(new Date(), time)
    } catch (e) {
      return 0
    }
  }
}

export default ReactStopClock
