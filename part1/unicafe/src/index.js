import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Stat = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({ good, neutral, bad}) => {

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

  return (
    <div>
      <h1>Statistics</h1>
      <Stat text="good" value={good} />
      <Stat text="neutral" value={neutral} />
      <Stat text="bad" value={bad} />
      <Stat text="all" value={all} />
      <Stat text="average" value={calcAverage(good, bad, all)} />
      <Stat text="positive" value={calcPercPositive(good, all)} />
    </div>
  )
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