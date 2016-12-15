import React, { PropTypes } from 'react'
import "./Waiting.css"

const Waiting = (props) => {
  return (
    <div className={"waiting"}>
      <h2>Players joined:</h2>
      {props.players.map((player, index)=><p key={index}>{player}</p>)}
    </div>
  )
}

Waiting.propTypes = {
  players: PropTypes.array.isRequired
}

export default Waiting
