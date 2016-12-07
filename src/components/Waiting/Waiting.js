import React, { PropTypes } from 'react'
import "./Waiting.css"

const Waiting = ({name}) => {
  return (
    <div className={"waiting"}>
      <h2>Thanks for joining {name}!</h2>
      <p>Waiting for more players</p>
    </div>
  )
}

Waiting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Waiting
