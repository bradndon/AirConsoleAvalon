import React, { PropTypes } from 'react'
import styled from "styled-components"

const Overlay = styled.div`
  background-color: rgba(0,0,50,0.6);
  padding: 50px;
  color: white;
  text-align: center;

  h2 {
    letter-spacing: 1px;
    width:100%;
  }
`

const Waiting = ({players}) => {
  const GameReady = players.length >= 5 && players.length <= 10 ? <h3>Ready to start!</h3> : null
  return (
      <Overlay>
        <h2>Players joined:</h2>
        {players.map((player, index)=><p key={index}>{player}</p>)}
        {GameReady}
      </Overlay>
  )
}

Waiting.propTypes = {
  players: PropTypes.array.isRequired
}

export default Waiting
