import React from 'react'

function Goal(props) {
  return (
    <div>
      <ul>
        <li>title : {props.title}</li>
        <li>importance : {props.importance}</li>
        <li>deadline : {props.deadline}</li>
        <li>explanation : {props.explanation}</li>
      </ul>
    </div>
  )
}
export default Goal;