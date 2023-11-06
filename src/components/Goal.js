import React from 'react'
import Button from '../ui/Button';
function Goal(props) {
  return (
    <div style={{border: '1px solid black'}}>
      <ul>
        <li>title : {props.title}</li>
        <li>importance : {props.importance}</li>
        <li>deadline : {props.deadline}</li>
        <li>explanation : {props.explanation}</li>
      </ul>
      <Button title="Delete" onClick={props.onClick} />
    </div>
  )
}
export default Goal;