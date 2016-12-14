import React, { PropTypes } from 'react'
import './JoinGame.css'

const JoinGame = ({handleSubmit, handleChange, name}) => {
  return (
      <form  className={'joinGame'} onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange}/>
        <input type='submit' value='Join Game'/>
      </form>
  )
}

JoinGame.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default JoinGame
