import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.excercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const parts_arr = props.parts.map((value, index) =>
    <Part key={`part-${index}`} name={value.name} excercises={value.exercises} />)
  return (
    <div>
      {parts_arr}
    </div>
  )
}
//<Part part={element.part} exercises={element.exercises} />

const Total = (props) => {
  let total = 0
  props.parts.forEach(element => total += element.exercises)
  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total  parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))