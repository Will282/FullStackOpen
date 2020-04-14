import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const calcAverage = (good, bad, all) => {
    if (all === 0) {
      return 0
    }
    else {
      return (good - bad) / all
    }
  }

  const calcPercPositive = (good, all) => {
    let val = 0
    if (all > 0 & good > 0) {
      val = 100.0 * (good / all)
    }
    return `${val}%`
  }

  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={calcAverage(good, bad, all)} />
        <Statistic text="positive" value={calcPercPositive(good, all)} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text="good" handleClick={() => setGood(good + 1)} />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)