import React, { PropTypes } from 'react'
import './Waiting.css'
import { Button } from 'controller/elements'

const Waiting = ({name, gameReady, startGame}) => {
  return (
    <div className={'waiting'}>
      <h2>{`Thanks for joining ${name}!`}</h2>
      {gameReady ?
        <Button onClick={startGame} text={'Start Game'}/>
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
