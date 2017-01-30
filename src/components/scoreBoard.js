import React from 'react'

let scoreBoard = (props) => {
  let score = props.score

  return (
    <div>
    <h2>Score</h2>
    <p>x: {score.x}</p>
    <p>y: {score.y}</p>
    </div>
  )
}

export default scoreBoard
