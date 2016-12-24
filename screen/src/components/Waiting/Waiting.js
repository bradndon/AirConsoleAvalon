import React, { PropTypes } from 'react'
import "./Waiting.css"

const Waiting = ({players}) => {
  const GameReady = players.length >= 5 && players.length <= 10 ? <h3>Ready to start!</h3> : null
  return (
    <div className={"waiting"}>
      <h2>Players joined:</h2>
      {players.map((player, index)=><p key={index}>{player}</p>)}
      {GameReady}
    </div>
  )
}

Waiting.propTypes = {
  players: PropTypes.array.isRequired
}

export default Waiting
