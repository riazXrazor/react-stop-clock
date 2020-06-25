/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import intervalToDuration from 'date-fns/intervalToDuration'
import parseJSON from 'date-fns/parseJSON'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import map from 'lodash/map'

let defaultOptions = {
  id: 1,
  onTick: null,
  presist: true,
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
    this._timer = null
    this._start = 0
    this._end = 0
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
      this._start = t
      return t
    })
    const [duration, setDuration] = useState({})
    useEffect(() => {
      this._timer = setInterval(() => {
        setDuration(() => {
          this._end = new Date()
          const d = intervalToDuration({
            start,
            end: this._end
          })
          if (this.onTick) {
            this.onTick(d)
          }
          return d
        })
      }, 1000)
      return () => {
        clearInterval(this._timer)
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

  isTimerActive = () =>
    this.presist
      ? !!this.presistanceType.getItem(`${this.key}-${this.id}`)
      : this._timer

  stopTimer = () => {
    clearInterval(this._timer)
    if (this.presist) {
      this.presistanceType.removeItem(`${this.key}-${this.id}`)
    }
  }

  startTimer = () => {
    this._start = new Date()
    if (this.presist) {
      this.presistanceType.setItem(
        `${this.key}-${this.id}`,
        new Date().toISOString()
      )
    }
  }

  resetTimer = () => {
    const d = new Date()
    this.presistanceType.setItem(`${this.key}-${this.id}`, d.toISOString())
  }

  getCurrentTimeInSeconds = () => {
    try {
      return differenceInSeconds(this._end, this._start)
    } catch (e) {
      return 0
    }
  }
}

export default ReactStopClock
