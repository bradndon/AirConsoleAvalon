import React, {PropTypes} from 'react';
import styled from 'styled-components'

const Section = styled.section`
  margin: 20px;
`

const Chosen = ({text, players}) => {
  return (
    <Section>
      <h2>{text}</h2>
      {players.map((player, i)=> {
        return (<p key={i}>{player.name}</p>)
      })}
    </Section>
  );
}

Chosen.propTypes = {
  text: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}

export default Chosen
