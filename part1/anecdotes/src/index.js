import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({ anecdote, votes}) => (
  <div>
    <p>{anecdote}<br></br>
    Has {votes} votes.</p>
  </div>
)


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandomIndex = (array) => Math.floor((Math.random() * array.length))

  const getMaxIndex = (array) => array.indexOf(Math.max(...array))

  const randomAnecdote = (array) => () => {
    const randomIndex = getRandomIndex(array)
    setSelected(randomIndex)
  }

  const addVote = (index) => () => {
    const newVotes = [...votes]
    newVotes[index] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the Day!" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={addVote(selected)} text='vote' />
      <Button handleClick={randomAnecdote(anecdotes)} text='next anecdote' />
      <Header text="Top Anecdote!" />
      <Anecdote anecdote={anecdotes[getMaxIndex(votes)]} votes={votes[getMaxIndex(votes)]} />
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