import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandomIndex = (array) => Math.floor((Math.random() * array.length))

  const getMaxIndex = (array) => array.indexOf(Math.max(...array))

  const randomAnecdote = (array) => () => {
    const randomIndex = getRandomIndex(array)
    console.log(randomIndex)
    setSelected(randomIndex)
  }

  const addVote = (index) => () => {
    const newVotes = [...votes]
    newVotes[index] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day!</h1>
        <p>
          {anecdotes[selected]}<br></br>
          has {votes[selected]} votes
        </p>
      <Button handleClick={addVote(selected)} text='vote' />
      <Button handleClick={randomAnecdote(anecdotes)} text='next anecdote' />
      </div>
      <div>
        <h1>Top Anecdote!</h1>
        <p>{anecdotes[getMaxIndex(votes)]}<br></br>
        has {votes[getMaxIndex(votes)]} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)