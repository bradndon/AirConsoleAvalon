import React, { PropTypes } from 'react'
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url("./back.jpg") no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`


const Overlay = styled.div`
  background-color: rgba(0,0,50,0.6);
  padding: 50px;

  h2 {
    text-align: center;
    color: white;
    letter-spacing: 1px;
    width:100%;
  }

  p {
    color: white;;
    text-align: center;
  }
`



const Waiting = ({players}) => {
  const GameReady = players.length >= 5 && players.length <= 10 ? <h3>Ready to start!</h3> : null
  return (
    <Container>
      <Overlay>
        <h2>Players joined:</h2>
        {players.map((player, index)=><p key={index}>{player}</p>)}
        {GameReady}
      </Overlay>
    </Container>
  )
}

Waiting.propTypes = {
  players: PropTypes.array.isRequired
}

export default Waiting
