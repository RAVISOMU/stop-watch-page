import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isStarted: false, time: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTime = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  startStopwatch = () => {
    this.timerId = setInterval(this.startTime, 1000)
    this.setState({isStarted: true})
  }

  stopStopWatch = () => {
    clearInterval(this.timerId)
    this.setState({isStarted: false})
  }

  onResetTime = () => {
    clearInterval(this.timerId)
    this.setState({isStarted: false, time: 0})
  }

  getTime = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const timeInMinutes = minutes > 9 ? minutes : `0${minutes}`
    const timeInSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${timeInMinutes}:${timeInSeconds}`
  }

  render() {
    return (
      <div className="stopwatch-container">
        <div className="stopwatch-responsive-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time">{this.getTime()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button start-button"
                onClick={this.startStopwatch}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.stopStopWatch}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onResetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
