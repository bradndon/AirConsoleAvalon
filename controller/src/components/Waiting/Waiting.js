import React, { PropTypes } from 'react'
import './Waiting.css'

const Waiting = ({name, gameReady, startGame}) => {
  return (
    <div className={'waiting'}>
      <h2>{`Thanks for joining ${name}!`}</h2>
      {gameReady ?
        <button onClick={startGame} className={'vote__submit'}>{'Start Game'}</button>
        : <p>{'Waiting for more players'}</p>
      }
    </div>
  )
}

Waiting.propTypes = {
  name: PropTypes.string.isRequired,
  gameReady: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
}

export default Waiting
